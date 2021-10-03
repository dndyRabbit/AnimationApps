import React from 'react'
import {View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, Animated, Image, TouchableWithoutFeedback} from 'react-native'
import {SIZES} from '../constants'
import {boardingDatas} from '../dummyDatas/dummyDatas'

const bgs = ['#28527a', '#1a1c20', '#7579e7', '#000000'];

const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((item, index) => index * SIZES.width),
        outputRange: bgs.map((bg) => bg)
    })
    return <Animated.View 
        style={[StyleSheet.absoluteFillObject, {
            backgroundColor
        }]}
    />
}

const Indicator = ({scrollX}) =>{
    return(
        <View
            style={{flexDirection:'row',}}
        >
            {boardingDatas.map((item, index) => {
                const inputRange =[(index - 1) * SIZES.width, index * SIZES.width, (index + 1) * SIZES.width]
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.6, 0.8, 0.6]
                })
                
                return(
                    <Animated.View
                        key={`indicator-${index}`}
                        style={{
                             height:7,
                            width:7,
                            borderRadius:5,
                            backgroundColor:'#fff',
                            margin:10,
                            marginTop:-80,
                            opacity:opacity,
                            transform:[
                                {
                                    scale
                                }
                            ]
                        }}
                    
                    />
                )
            })}
        </View>
    )
}

const Square = ({scrollX}) => {
    const YOLO = Animated.modulo(
        Animated.divide(Animated.modulo(scrollX, SIZES.width), new Animated.Value(SIZES.width)),
        1
    )

    const rotate = YOLO.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:['35deg', '0deg', '35deg']
    });
    const translateX = YOLO.interpolate({
        inputRange:[0, 0.5, 1],
        outputRange:[0, -SIZES.height, 0]
    })

    return (
            <Animated.View 
        style={{ 
            width:SIZES.height, 
            height: SIZES.height, 
            backgroundColor:'#fff', 
            borderRadius:86, 
            position:'absolute',
            top:-SIZES.height * 0.6,
            transform: [
                {
                    rotate
                },
                {
                    translateX
                }
            ],
    }}
    />
    )
    
}

const OnBoarding = ({navigation}) => {
    const scrollX = React.useRef(new Animated.Value(0)).current

    function renderContent(){
        const renderItem = ({item}) => (
            <View
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    width:SIZES.width,
                    height:SIZES.height,
                    padding:SIZES.padding * 2,
                    paddingBottom:200
                }}
            >
                <View
                >
                    <Image 
                        source={item.img}
                        resizeMode='contain'
                        style={{
                            width:SIZES.width /2 ,
                            height:SIZES.height/ 2 ,
                            zIndex:2
                        }}
                    />
                </View>
                <View>
                    <Text style={{fontWeight:'bold', fontSize:25, marginBottom:10, color:'#fff'}}>{item.title}</Text>
                    <Text style={{textAlign:'justify', color:'#fff', fontSize:12}}>{item.description}</Text>
                </View>
            </View>
        )

        return(
            <View
                style={styles.boardingContainer}  
            >
                <StatusBar hidden/>
                <Backdrop scrollX={scrollX}/>
                <Square scrollX={scrollX}/>
                <Animated.FlatList 
                    data={boardingDatas}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={32}
                    pagingEnabled
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: false}
                    )}
                />
                <View style={{
                    position:'absolute',
                    width:'90%',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    bottom:130
                }}>
                    <TouchableWithoutFeedback
                        
                    >
                        <View style={{
                            width:100,
                            height:50,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'white',
                            borderTopLeftRadius:50,
                            borderBottomRightRadius:50,
                            borderTopRightRadius:2,
                            borderBottomLeftRadius:2
                        }}><Text>Register</Text></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        // KE login
                        onPress={() => navigation.navigate("Login", {screen:'Login'})}
                    >
                        <View style={{
                            width:100,
                            height:50,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:'white',
                            borderTopLeftRadius:50,
                            borderBottomRightRadius:50,
                            borderTopRightRadius:2,
                            borderBottomLeftRadius:2
                        }}><Text>Login</Text></View>
                    </TouchableWithoutFeedback> 
                </View>
                <Indicator scrollX={scrollX} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    boardingContainer:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default OnBoarding

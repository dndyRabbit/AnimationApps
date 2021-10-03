import React from 'react'
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {images} from '../constants'

const {width, height} = Dimensions.get('screen');
const imageW = width * 0.7
const imageH = imageW * 1.54



const artDatas = [
    images.scaryart1,
    images.scaryart2,
    images.scaryart3,
    images.scaryart4,
    images.scaryart5,
    images.scaryart6,
    images.scaryart7,
    images.scaryart8,
]

const FloatingView = ({animation}) => {
    const translateX = animation.interpolate({
        inputRange:[0, 1],
        outputRange: [-200, 100]
    })

    return(
        <Animated.View
        style={{
            position:'absolute',
            width:120,
            height:30,
            backgroundColor:'red',
            top:130,
            left:20,
            zIndex:2,
            transform:[{
                translateX
            }]
        }}
        >
            <Text>gg gaming</Text>
        </Animated.View>
    )
}

const Art = ({navigation}) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const animation = React.useRef(new Animated.Value(0)).current;
    const [toggle, setToggle] = React.useState(0)

    const toggleMenu = () =>{
        const toValue = toggle ? 0 : 1;
    
        Animated.spring(animation, {
            toValue,
            friction:5,
            useNativeDriver: true,
            
        }).start()

        setToggle(!toggle)
    }

   

    const FloatingButton = () =>{

        const rotate = animation.interpolate({
            inputRange:[0, 1],
            outputRange:['0deg', '45deg'],
        })

        const translateY = animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, -60]
        })

        const translateX = animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, -60]
        })
        const scale = animation.interpolate({
            inputRange:[0, 1],
            outputRange:[1, 0.8]
        })

        return (
            <View style={{
                alignItems:'center',
                position:'absolute',
                bottom:100,
                right:50,
                justifyContent:'center'
            }}>
                
                <TouchableOpacity
                activeOpacity={0.8}
                    style={[styles.button, styles.secondButton, {transform:[{translateX}]}]}
                >
                    <Icon 
                        name='allergy'
                        size={20}
                        color='black'
                    />
                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.8}
                    style={[styles.button, styles.secondButton, {transform:[{translateY}]}]}
                >
                    <Icon 
                        name='alien-outline'
                        size={20}
                        color='black'
                    />
                </TouchableOpacity>

                <TouchableOpacity
                onPress={toggleMenu}
                activeOpacity={1}
                    style={[styles.button, {transform:[{rotate}, {scale}]}]}
                >
                    <Icon 
                        name='plus'
                        size={40}
                        color='#fff'
                    />
                </TouchableOpacity>
            </View>

        )
    }

    function renderArt(){
        const renderItem = ({item}) => {
            return(
                <View
                    style={{ width, justifyContent:'center', alignItems:'center', height}}
                >
                    
                    <Image 
                        source={item}
                        keyExtractor={(_, index) => index.toSring()}
                        resizeMode='cover'
                        style={{
                            width: imageW,
                            height: imageH,
                            borderRadius:20
                        }}
                    />
                </View>
            )
        }

        return(
            <View>
               <View style={[StyleSheet.absoluteFillObject, {flexDirection:'row'}]}>
                {
                        artDatas.map((image, index) => {
                            const inputRange= [
                                (index - 1) * width,
                                index * width,
                                (index + 1) * width
                            ]
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange:[0, 1, 0]
                            })

                            return <Animated.Image 
                                key={`image-${index}`}
                                source={image}
                                blurRadius={5}
                                style={[
                                    StyleSheet.absoluteFillObject,
                                    {
                                        width,
                                        height,
                                        opacity:opacity,
                                    }
                                ]}
                            /> 
                        })
                    }
                </View>
                <Animated.FlatList 
                    data={artDatas}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                    renderItem={renderItem}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                      )}
                />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        position:'absolute', 
                        top:20,
                        left:20
                    }}
                >
                    <Icon 
                        name='arrow-left-bold-circle'
                        size={40}
                        color='grey'          
                    />
                </TouchableOpacity>
                
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
               <FloatingView animation={animation} />
            {renderArt()}
            
            <FloatingButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    button:{
        width:60,
        height:60,
        borderRadius:60 /2,
        position:'absolute',
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    secondButton:{
        width:40,
        height:40,
        borderRadius:40 /2,
        backgroundColor:'#fff',
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        
    }
})

export default Art

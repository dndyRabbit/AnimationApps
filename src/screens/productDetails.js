import React from 'react'
import {View, Text, StyleSheet,SafeAreaView, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SIZES } from '../constants'
import * as Animatable from 'react-native-animatable'
import {SharedElement} from 'react-navigation-shared-element'



const animation = {
    0: {translateX: SIZES.width},
    1: {translateX: 0},
}

const animationImage= {
    0:{translateY: SIZES.width, },
    1:{translateY: 0, }
}

const letterAnimation = {
    0: {opacity: 0, translateY: -42},
    1: {opacity: 1, translateY: 0},
}

const DURATION = 300

const PlayIcon = () => <Icon 
name={'play-circle'}
color='#fff'
size={17}
/>

const ProductDetails = ({route, navigation}) => {
    const circleSize = Math.sqrt(Math.pow(SIZES.height, 2) + Math.pow(SIZES.width, 2))
    const {item} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position:'absolute',
                    top:20,
                    right:20,
                    zIndex:2
                }}
            >
                <Icon 
                    name='close-circle-outline'
                    size={25}
                    color='#000'
                />    
            </TouchableOpacity>

            {/* sharedElement circle */}
            <SharedElement
            id={`item.${item.key}.circle`}
                style={[StyleSheet.absoluteFill, { alignItems:'center', justifyContent:'center'}]}
                collaspable={false}
            >
                <View 
                    style={{
                        position:'absolute',
                        width:circleSize,
                        height:circleSize,
                        borderRadius:circleSize,
                        opacity: 0.2,
                        backgroundColor: item.color
                    }}
                />
            </SharedElement>

            {/* sharedElement Image */}
            <SharedElement
                id={`item.${item.key}.image`}
                style={styles.image}
                collaspable={false}
            >
                <Image 
                    source={item.image}
                    style={styles.image}
                />
            </SharedElement>
           
            <View style={{ position: 'absolute', top:SIZES.padding * 2, left:SIZES.padding,}}>
                <View style={{ flexDirection:'row', overflow:'hidden' }}>
                        {item.type.split('').map((letter, index) => {
                            return(
                                <Animatable.Text
                                    useNativeDriver
                                    animation={letterAnimation}
                                    delay={10 + index * 100}
                                    key={`${letter}-${index}`}
                                    style={{ fontSize: 42, fontWeight:'bold', textTransform:'uppercase',height:46 }}
                                >
                                    {letter}
                                </Animatable.Text>
                            )
                        })}
                </View>
                <View style={{ overflow: 'hidden' }}>
                    <Animatable.Text style={{ fontSize:20, fontWeight:'bold', textTransform:'uppercase', color:item.color, marginTop:-5, marginLeft:3}}
                        useNativeDriver
                        animation={letterAnimation}
                        delay={300 + item.type.split('').length * 50 + 50}
                    >
                        {item.colorName}
                    </Animatable.Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', flex:1, padding:SIZES.padding }}>
                <Animatable.View 
                style={{
                    flex:0.35,
                    overflow:'hidden' , 
                }}>
                    <Animatable.View 
                        animation={animation}
                        delay={DURATION}
                        useNativeDriver
                        style={{ 
                            flex:1, 
                            justifyContent:'space-between',
                            marginRight:10,
                            padding:SIZES.padding,
                            borderWidth:1,
                            borderColor:'#000',
                            overflow:"hidden"
                        }}>
                        <Animatable.View
                            animation={animation}
                            delay={DURATION + 100}
                            useNativeDriver
                        >
                            <Text style={{  color:'#000', fontWeight:'bold', fontSize:12 }}>ADVERTISING</Text>
                            <Text style={{  color:'#000', fontWeight:'bold',fontSize:12 }}>MARKET</Text>
                        </Animatable.View>
                        <Animatable.View 
                            animation={animation}
                            delay={DURATION + 200}
                            useNativeDriver
                        style={{ flexDirection:'row', alignSelf:'flex-end'}}>
                            <Text style={{ marginRight:5, fontSize:12, color:'#fff', fontWeight:'bold' }}>PLAY VIDEO</Text>
                            <PlayIcon />
                        </Animatable.View>
                    </Animatable.View>
                </Animatable.View>
                <View style={{
                    flex:0.65,
                    overflow:'hidden'
                }}>
                    <Animatable.Image 
                        animation={animationImage}
                        delay={DURATION + 300}
                        useNativeDriver
                        source={item.bgImage}
                        style={[StyleSheet.absoluteFillObject]}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:SIZES.width * 0.9,
        height:SIZES.width * 0.9,
        resizeMode:'contain',
        alignSelf:'center',
        marginVertical:90,
    },
})

ProductDetails.sharedElements = (route, otherRoute, showing) =>{
    const {item} = route.params
    return[
        {
            id:`item.${item.key}.image`,
        },
        {
            id:`item.${item.key}.circle`,
        }
    ]
}

export default ProductDetails

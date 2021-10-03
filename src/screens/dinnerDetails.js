import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {SIZES} from '../constants'
import * as Animatable from 'react-native-animatable'
import { SharedElement } from 'react-navigation-shared-element'

const animation = {
    0:{opacity: 0, translateY: 100},
    1:{opacity: 1, translateY: 0}
}
const animationType = {
    0:{opacity: 0, translateY: -200},
    1:{opacity: 1, translateY: 0}
}

const createAnimation = (from) => ({
    0:{opacity:0, translateY: -170, translateX: from},
    1:{opacity:1, translateY:0, translateX: 0}
})

const animations =[
    createAnimation(100),
    createAnimation(0),
    createAnimation(-100)
]

const CELL_WIDTH = SIZES.width * 0.64;
const CELL_HEIGHT = CELL_WIDTH * 1.4;
const FULL_SIZE = CELL_WIDTH + SIZES.padding * 2
const DURATION = 100



const DinnerDetails = ({route, navigation}) => {

    const {item} = route.params

    return (
        <View style={{flex: 1}}>
            <SharedElement
            collaspable={false} 
                id={`item.${item.key}.bg`}
                style={[StyleSheet.absoluteFillObject]}
            >
                <View 
                    style={[
                        StyleSheet.absoluteFillObject, 
                        {backgroundColor: item.color}
                    ]} 
                />
            </SharedElement>
            <SharedElement
                id={`item.${item.key}.meta`}
                collaspable={false} 
            >
                <View style={{position:'absolute', top:SIZES.padding* 2, left:SIZES.padding * 2}}>
                    <Animatable.Text 
                        animation={animationType}
                        delay={DURATION}
                        useNativeDriver
                    style={styles.type}>{item.type}</Animatable.Text>
                    <Animatable.Text 
                        animation={animationType}
                        delay={DURATION}
                        useNativeDriver
                    style={styles.subType}>{item.subType}</Animatable.Text>
                </View>
            </SharedElement>
            <View 
                style={{
                    marginTop: SIZES.height * 0.1
                }}
            >
                <SharedElement
                    id={`item.${item.key}.image`}
                    style={styles.image}
                    collaspable={false} 
                >
                    <Image source={item.image} style={styles.image} />
                </SharedElement>
                
                <View 
                    style={{ 
                        flexDirection:'row', 
                        justifyContent:'space-evenly',
                        marginBottom:SIZES.padding * 3
                    }}
                >
                    {item.subcatagories.map((subCategory, index) => {
                        return(
                            <Animatable.View key={subCategory.key}
                            animation={animations[index]}
                            delay={DURATION + 200}
                            useNativeDriver
                                style={{
                                    backgroundColor:`${item.fullColor}88`,
                                    padding:SIZES.padding,
                                    borderRadius:50
                                }}
                            >
                                <Image 
                                    source={subCategory.image}
                                    resizeMode='contain'
                                    style={{ width:32, height:32 }}
                                />
                            </Animatable.View>
                        )
                    })}
                </View>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                    style={{
                    position:'absolute',
                    top:10,
                    right:10
                }}
            >
                <Icon 
                    name='close-circle-outline'
                    size={20}
                    color='#000'
                />
            </TouchableOpacity>
            <View style={{ padding: SIZES.padding}}>
                <Animatable.Text 
                animation={animation}
                delay={DURATION + 400}
                useNativeDriver
                    style={{
                        fontSize: 32, 
                        fontWeight:'bold', 
                        marginBottom:5
                    }}
                >{item.price}</Animatable.Text>
                <Animatable.Text 
                    animation={animation}
                    delay={DURATION + 600}
                    useNativeDriver
                style={{ fontSize: 12, lineHeight:15, opacity:0.8, textAlign:'justify'}}>{item.description}</Animatable.Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    type:{
        fontWeight:'bold',
        fontSize:22
    },
    subType:{
        fontSize:12,
        opacity:0.8
    },
    image:{
        width: CELL_WIDTH ,
        height: CELL_WIDTH ,
        alignSelf:'center',
        resizeMode:'contain',
        marginVertical:SIZES.padding * 2,
        zIndex:2
    }
})

export default DinnerDetails


DinnerDetails.sharedElements = (route, otherRoute, showing) =>{
    const {item} = route.params
    return[
        {
            id:`item.${item.key}.bg`,
        },
        {
            id:`item.${item.key}.meta`,
        },
        {
            id:`item.${item.key}.image`,
        },
    ]
}
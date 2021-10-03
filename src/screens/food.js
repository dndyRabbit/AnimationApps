import React, { useState, useEffect, useRef, useCallback} from 'react'
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Easing, Transition, Transitioning } from 'react-native-reanimated'
import { SIZES } from '../constants';
import {foodDatas, iconsByType, detailList} from '../dummyDatas/foodDatas'
import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')
import posed, {Transition as PoseTransition} from 'react-native-pose'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const DURATION = 700;
const TITLE_SIZE = 36;
const SPACING = 80;
const IMAGE_SIZE = SIZES.width * 0.6

const colors ={
    lightBg: '#F2F2F2',
    darkBg: '#2c2d51',
    lightText:'#e5e5dd',
    darkText:'#a5a6aa'
}
const Item =({ children, style }) => {
    return(
        <View
            style={[
                {
                    justifyContent:'center',
                    overflow:'hidden',
                    backgroundColor:'transparent'
                },
                style,
            ]}
        > 
        {children}
        </View>
    )
}

const Icons = ({ type }) => {
    return(
        <SimpleLineIcons 
            name={type}
            size={26}
            color='#a5a6aa'
            style={{ marginRight:15, height:26 }}
        />
    )
}

const Description = ({ index, text, color }) => {
    return(
        <Item>
            <Text key={`description-${index}`} style={{ fontSize:16, color, overflow:'hidden'}} numberOfLines={4}>
                {text}
            </Text>
        </Item>
    )
}

const Title = ({ index, text, color }) => {
    return(
        <Item style={{ height: TITLE_SIZE * 3, justifyContent:'flex-end', overflow:'hidden'}}>
            <Text
                key={`title-${index}`}
                style={{
                    fontSize:TITLE_SIZE,
                    fontWeight:'900',
                    color,
                    overflow:'hidden'
                }}
            >
                {text}
            </Text>
        </Item>
    )
}

// const config = {
//     transition: {
//         type: 'tween',
//         duration: DURATION,
//         easing: Easing.elastic(0.9),
//     }
// }

const PosedView = posed.View({
    enter: {opacity: 1, rotate: '0deg' },
    exit: {opacity: 0, rotate: '180deg'}
})

const Details = ({color, index}) => {
    return(
        <View style={{ marginVertical: SPACING }}>
            {detailList.map((key) => {
                return(
                    <View
                        key={key}
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginBottom:25
                        }}
                    >
                        <Icons type={iconsByType[key]} />
                        <Item style={{ height:26, flex:1, justifyContent:'center'}} >
                            <Text
                                key={`${key}-${index}`}
                                style={{ fontSize:16, color, fontWeight:'700'}}
                            >
                                {foodDatas[index][key]}
                            </Text>
                        </Item>
                    </View>
                )
            })}
        </View>
    )
}

const transition = (
    <Transition.Together>
        <Transition.Out type='slide-bottom' durationMs={DURATION} interpolation='easeIn' />
        <Transition.Change />
        <Transition.In type='slide-bottom' durationMs={DURATION} interpolation='easeOut' />
    </Transition.Together>
)

const Food = ({navigation}) => {
    const [index, setIndex] = useState(0)
    const color = index % 2 === 1? colors.lightText : colors.darkText
    const headingColor = index % 2 === 1? colors.lightText : colors.darkBg
    const activeIndex = useRef(new Animated.Value(0)).current
    const animation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(animation, {
            toValue: activeIndex,
            duration:DURATION * 0.5,
            useNativeDriver:true
        }).start()
        
    })

    const setActiveIndex = React.useCallback(newIndex => {
        activeIndex.setValue(newIndex)
        ref.current.animateNextTransition();
        setIndex(newIndex)
    })

    const translateY = animation.interpolate({
        inputRange: [-1, 0 ,1],
        outputRange:[height , 0, -height]
    })

    const ref = useRef()

    return (
        <FlingGestureHandler 
            key='up'
            direction={Directions.UP}
            onHandlerStateChange={ ev => {
                if (ev.nativeEvent.state === State.END){
                    if (index === foodDatas.length - 1){
                        return;
                    }
                    setActiveIndex(index + 1)
                }
            }}
        >
            <FlingGestureHandler
                key='down'
                direction={Directions.DOWN}
                onHandlerStateChange={ ev => {
                    if (ev.nativeEvent.state === State.END){
                        if (index === 0){
                            return;
                        }
                        setActiveIndex(index - 1)
                    }
                }}
            >
                <SafeAreaView style={styles.container}>         
                    <Animated.View
                        style={[
                            StyleSheet.absoluteFillObject,
                            { height: height * foodDatas.length, transform:[{translateY}] }
                        ]}
                    >
                        
                        {foodDatas.map((_,i) =>{
                            return (
                                <View 
                                    key={i} 
                                    style={{
                                        height, 
                                        backgroundColor: i % 2 === 0 ? colors.lightBg : colors.darkBg 
                                    }}
                                >
                                </View>
                            )
                        })}
                    </Animated.View>
                    <PoseTransition>
                    {index % 2 === 0 ? 
                        (<PosedView
                        key='image0'
                            style={[
                                styles.imageContainer,
                                { borderColor: index % 2 === 0 ? colors.darkBg : colors.lightBg}
                            ]}
                        >
                            <Image 
                                source={foodDatas[index].img}
                                resizeMode='cover'
                                style={[styles.image, {  borderColor:color,}]}
                            />
                        </PosedView>) : (<PosedView
                        key='image1'
                            style={[
                                styles.imageContainer,
                                { borderColor: index % 2 === 0 ? colors.darkBg : colors.lightBg}
                            ]}
                        >
                            <Image 
                                source={foodDatas[index].img}
                                resizeMode='cover'
                                style={[styles.image, {  borderColor:color,}]}
                            />
                        </PosedView>) 
                    }
                    </PoseTransition>
                    <Transitioning.View
                        ref={ref}
                        transition={transition}
                        style={{
                            padding:20,
                            flex:1,
                            justifyContent:'space-evenly',
                            
                        }}
                    >
                        <Title color={headingColor} index={index} text={foodDatas[index].title} />
                        <Details color={color} index={index} />
                        <Description 
                            index={index}
                            text={foodDatas[index].description}
                            color={headingColor}
                        />
                        
                    </Transitioning.View>

                    <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                position:'absolute',
                                top: 20,
                                left:20
                            }}
                        >
                        <Text style={{ fontSize:30, color:color}}>☠</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </FlingGestureHandler>
        </FlingGestureHandler>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    imageContainer:{
        position:'absolute',
        right:-70,
        top:240,
        borderWidth:2,
        borderRadius:127,
        padding:SIZES.padding * 2
    },
    image:{
        width:IMAGE_SIZE,
        height:IMAGE_SIZE,
        borderRadius:100,
    }
})

export default Food

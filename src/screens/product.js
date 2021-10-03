import React, { useRef } from 'react'
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
import { images, SIZES } from '../constants';
import {productDatas} from '../dummyDatas/produkDatas'
import {SharedElement} from 'react-navigation-shared-element'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height} = Dimensions.get('window')
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 30;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6

const Product = ({navigation}) => {
    
    const Circle = ({scrollX}) => {
        return(
            <View style={[ StyleSheet.absoluteFillObject , styles.circleContainer]}>
                {productDatas.map((p ,index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width ]
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange:[0, 1, 0],
                        extrapolate:'clamp'
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange:[0 ,1, 0]
                    })
                    return(
                        <SharedElement
                            id={`item.${p.key}.circle`}
                            style={styles.circle}
                            collaspable={false}
                        >
                            <Animated.View key={index.key} style= {[styles.circle, { top:0, backgroundColor: p.color, transform:[{scale}], opacity }]} />
                        </SharedElement>
                    )
                })}
            </View>
        )
    }

    const Ticker = ({scrollX}) => {
        const inputRange= [-width, 0 , width];
        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [TICKER_HEIGHT,0,-TICKER_HEIGHT]
        })
        return(
            <View style={styles.tickerContainer}> 
                <Animated.View style={{ transform: [{ translateY }]}}>
                    {productDatas.map(({type}, index) => {
                        return <Text key={index} style={styles.tickerText} >{type}</Text>
                    })}
                </Animated.View>
            </View>
        )
    }

    const Item = ({ item, index, scrollX }) => {
        const {image, heading, description} = item
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const inputRangeOpacity = [(index - 0.3) * width, index * width, (index + 0.3) * width];
        const scale = scrollX.interpolate({
            inputRange,
            outputRange:[0, 1, 0]
        })

        const translateXHeading = scrollX.interpolate({
            inputRange,
            outputRange:[width * 0.5, 0 , -width * 0.5]
        })
        const translateXDescription = scrollX.interpolate({
            inputRange,
            outputRange:[width, 0 , -width]
        })

        const opacity = scrollX.interpolate({
            inputRange:inputRangeOpacity,
            outputRange:[0, 1, 0]
        })

        return(
            <TouchableOpacity style={styles.itemStyle}
                onPress={() => navigation.navigate('ProductDetails', {item})}
                activeOpacity={0.8}
            >
                <SharedElement
                    id={`item.${item.key}.image`}
                    style={styles.imageStyle}
                    collaspable={false}
                >
                    <Animated.Image source={image} style={[styles.imageStyle, {transform:[{ scale }]}]} />
                </SharedElement>
                <View style={styles.textContainer}>
                    <Animated.Text style={[styles.heading, {opacity, transform:[{ translateX: translateXHeading}]}]}>{heading}</Animated.Text>
                    <Animated.Text style={[styles.description, {opacity, transform: [{translateX: translateXDescription}]}]}>{description}</Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }

    const Pagination = ({scrollX}) => {
        const inputRange= [-width, 0, width]
        const translateX = scrollX.interpolate({
            inputRange,
            outputRange:[-DOT_SIZE , 0, DOT_SIZE]
        })
        const rotateY = scrollX.interpolate({
            inputRange,
            outputRange:['-180deg', '0deg', '180deg']
        })
        const rotateX = scrollX.interpolate({
            inputRange,
            outputRange:['-180deg', '0deg', '180deg']
        })
        return(
            <View style={styles.pagination}>
                <Animated.View style={[styles.paginationIndicator, {transform:[{translateX}, {rotateY}, {rotateX}], position:'absolute' }]} />
                {productDatas.map((item) => {
                    return(
                        <View key={item.key} style={styles.paginationDotContainer}>
                            <View 
                                style={[styles.paginationDot, {backgroundColor: item.color}]}
                            />
                        </View>
                    )
                })}
            </View>
        )
    }
 
    const scrollX = React.useRef(new Animated.Value(0)).current

     return (
         <SafeAreaView style={styles.container}>
             <Circle scrollX={scrollX} />
             <Animated.FlatList 
                keyExtractor={(item) => item.key}
                data={productDatas}
                renderItem={({ item, index }) => <Item item={item} scrollX={scrollX} index={index} />}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                onScroll={ Animated.event(
                    [{ nativeEvent: {contentOffset: { x: scrollX } } }],
                    {useNativeDriver:true}
                )}
                scrollEventThrottle={16}
             />
             <Image 
                style={styles.logo}
                source={images.predator}
             />
             <Pagination scrollX={scrollX} />
             <Ticker scrollX={scrollX} />
             <TouchableOpacity
             onPress={() => navigation.navigate('Home')}
                style={{
                    position:'absolute',
                    top:10,
                    left:10
                }}
             >
                 <Icon 
                    name='arrow-left'
                    size={20}
                    color='#000'
                 />
             </TouchableOpacity>
             <FloatingButton scrollX={scrollX} />
         </SafeAreaView>
     )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7F7F7'
    },
    itemStyle:{
        width,
        height,
        alignItems:'center',
        justifyContent:'center',
    },
    imageStyle:{
        width: width * 0.65,
        height: width * 0.65,
        resizeMode:'contain',
        flex:1
    },
    textContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        flex: 0.5,
      },
      heading: {
        color: '#444',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: 5,
      },
      description: {
        color: '#ccc',
        fontWeight: '600',
        textAlign: 'left',
        width: width * 0.75,
        marginRight: 10,
        fontSize: 16,
        lineHeight: 16 * 1.5,
      },
    logo:{
        opacity:0.9,
        height: LOGO_HEIGHT,
        width:LOGO_WIDTH,
        resizeMode:'contain',
        position:'absolute',
        left:10,
        bottom:10,
        transform:[
            { translateX : -LOGO_WIDTH / 2 },
            { translateY : -LOGO_HEIGHT / 2 },
            { rotateZ: '-90deg' },
            { translateX: LOGO_WIDTH / 2 },
            { translateY: LOGO_HEIGHT / 2}
        ]
    },
    paginationDot: {
        width: DOT_SIZE * 0.3,
        height: DOT_SIZE * 0.3,
        borderRadius: DOT_SIZE * 0.15,
    },
    paginationDotContainer: {
        width: DOT_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
    },
     paginationIndicator: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    pagination: {
        position: 'absolute',
        right: 20,
        bottom: 40,
        flexDirection: 'row',
        height: DOT_SIZE,
      },
      tickerContainer:{
        position:'absolute',
        top:40,
        left:20,
        overflow:'hidden',
        height:TICKER_HEIGHT
      },
      tickerText:{
        fontSize:TICKER_HEIGHT,
        lineHeight:TICKER_HEIGHT,
        textTransform:'uppercase',
        letterSpacing: 2,
        fontWeight:'bold'
      },
      circle:{
        width:CIRCLE_SIZE,
        height:CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE,
        position:'absolute',
        top:'19%',
      },
      circleContainer:{
       alignItems:'center',
       justifyContent:'center'
      }
})

export default Product
 
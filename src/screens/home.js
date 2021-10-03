import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Svg, { Path,  } from 'react-native-svg';
import { SIZES, images } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {LinearGradient} from 'expo-linear-gradient'

const WavyHeader = ({ customStyles }) => {
    return(
        <View style={customStyles}>
            <View style={{ backgroundColor: '#8c0000', height: 140}}>
                <Svg
                    height="60%"
                    width="100%"
                    viewBox="0 0 1440 320"
                    style={{ position: 'absolute', top: -70 }}
                >
                    <Path 
                    fill="#8c0000" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,234.7C840,267,960,277,1080,245.3C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                </Svg>
            </View>
        </View>
    )
}

const Home = ({navigation}) => {

    function renderHeader(){
        return(
            <View
                style={{
                    width:SIZES.width,
                    height:300,
                    padding:SIZES.padding * 2,
                }}
            >   
                    <WavyHeader customStyles={styles.svgCurve} />
                
                <View
                    style={{
                        flexDirection:'row',
                    }}
                >
                    <View
                        style={{
                            justifyContent:'space-between',
                            flexDirection:'column',
                            height:220,
                            width:100,
                            marginRight:20
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                        >
                            <View
                                style={{
                                    width:35,
                                    height:35,
                                    backgroundColor:'#000000',
                                    borderRadius:25,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <Icon 
                                    name='transfer-right'
                                    size={17}
                                    color='#fff'
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, color:'#fff', fontWeight:'bold' }}>The Galery Of Animation</Text>
                    </View>
                        <Image 
                            source={images.sheep}
                            resizeMode='contain'
                            style={{
                                width:210,
                                height:260
                            }}
                        />
                </View>
                
                
                
            </View>
        )
    }
   
    function renderContent(){
        return(
            <View
                style={styles.contentContainer}
            >
                
                {/* row 1 */}
                <View
                    style={styles.contentBox}
                >
                    
                        <TouchableOpacity
                            //Movies Pages
                            onPress={() => navigation.navigate('Movies')}
                        >
                            <LinearGradient style={styles.box}
                                colors={['#435560','#c8c6a7']}
                            >
                                <Text style={styles.textStyle}>Movies</Text>
                                <Image 
                                    source={images.movies}
                                    resizeMode='contain'
                                    style={{
                                        width:100,
                                        height:100,
                                        position:'absolute',
                                        bottom:0,
                                        right:0,
                                        transform:[
                                            {
                                                rotateY:'180deg'
                                            }
                                        ],
                                        tintColor:'#383e56'
                                    }}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Art')}
                    >
                        <LinearGradient style={styles.box}
                                colors={['#3b2e5a','#8675a9']}
                            >
                                <Text style={styles.textStyle}>The Art`s</Text>
                                <Image 
                                    source={images.art}
                                    resizeMode='contain'
                                    style={{
                                        width:120,
                                        height:120,
                                        position:'absolute',
                                        bottom:0,
                                        right:5,
                                        top:0,
                                        transform:[{rotateY:'180deg'}],
                                        tintColor:'#583d72'
                                    }}
                                   
                                />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                
                {/* row 2 */}
                <View
                    style={styles.contentBox}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Food')}
                    >
                        <LinearGradient style={styles.box}
                            colors={['#d97642','#fff9b0']}
                        >
                            <Text style={styles.textStyle}>Food</Text>
                            <Image 
                                    source={images.foodlogo}
                                    resizeMode='contain'
                                    style={{
                                        width:100,
                                        height:100,
                                        position:'absolute',
                                        bottom:0,
                                        right:10,
                                        transform:[{rotateY:'180deg'}],
                                    }}
                                />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={() => navigation.navigate('Product')}
                    >
                        <LinearGradient style={styles.box}
                       
                            colors={['#51c2d5','#f4f9f9']}
                            >
                            <Text style={styles.textStyle}>Product</Text>
                            <Image 
                                    source={images.cpuLogo}
                                    resizeMode='contain'
                                    style={{
                                        width:130,
                                        height:100,
                                        position:'absolute',
                                        bottom:-7,
                                        right:0
                                    }}
                                />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* row 3 */}
                <View
                    style={styles.contentBox}
                >
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Dinner')}
                    >
                        <LinearGradient style={styles.box}
                            colors={['#98ded9','#f9f871']}
                            >
                                <Text style={styles.textStyle}>Dinner</Text>
                                <Image 
                                    source={images.dinnerLogo}
                                    resizeMode='contain'
                                    style={{
                                        width:150,
                                        height:150,
                                        position:'absolute',
                                        bottom:-30,
                                        right:-20,
                                        transform:[{rotate: '-15deg'}]
                                    }}
                                />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient style={styles.box}
                            colors={['#1687a7','#a6f0c6']}
                        >
                            <Text style={styles.textStyle}>Unknown</Text>
                            <Image 
                                    source={images.doggo}
                                    resizeMode='contain'
                                    style={{
                                        width:100,
                                        height:100,
                                        position:'absolute',
                                        bottom:0,
                                        right:0
                                    }}
                                />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
   
    return (
        <SafeAreaView style={styles.container}>
               
                    <LinearGradient
                        colors={[ '#8c0000', '#000000',]}
                    >
                        {renderHeader()}
                    </LinearGradient>
                    {renderContent()}
                    
     
                {/* <DrawerNavigator /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000',
    },
    svgCurve: {
        position: 'absolute',
        width: SIZES.width,
        transform:[
            {
                rotate:'180deg'
            }
        ],
        top:-50
    },
    contentContainer:{
        width:SIZES.width,
        padding:SIZES.padding * 2,
    },
    contentBox:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    box:{
        width:150,
        height:100,
        backgroundColor:'blue',
        borderRadius:15,
        padding:SIZES.padding
    },
    textStyle:{
        color:'#fff', 
        fontSize:16, 
        fontWeight:'bold'
    },
})

export default Home

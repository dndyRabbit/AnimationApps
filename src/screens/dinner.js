import React, {useState} from 'react'
import {View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView} from 'react-native'
import dinnerDatas, {tabs, ORANGE, popularFood} from '../dummyDatas/dinnerDatas'
import {SIZES} from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SharedElement } from 'react-navigation-shared-element'

const CELL_WIDTH = SIZES.width * 0.64;
const CELL_HEIGHT = CELL_WIDTH * 1.4;
const FULL_SIZE = CELL_WIDTH + SIZES.padding * 2

const Dinner = ({navigation}) => {
    const [selectedTab, setSetlectedTab] = useState(tabs[0])
    return (
        <ScrollView>

            {/* render tab food */}
            <SafeAreaView style={{flex:1}}>
                <FlatList 
                    data={tabs}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    horizontal
                    style={{ flexGrow: 0 }}
                    contentContainerStyle={{ padding:10 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item: tab}) => {
                        return(
                            <TouchableOpacity
                                onPress={() => setSetlectedTab(tab)}
                            >
                                <View style={[styles.pill, 
                                    {
                                        backgroundColor: 
                                            selectedTab === tab ? ORANGE : 'transparent'
                                    }
                                ]}
                                >
                                    <Text style={[styles.pillText, {
                                        color: 
                                            selectedTab === tab ? 'white' : 'black'
                                    }]}>{tab}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                {/* render Card food */}
                <FlatList 
                    data={dinnerDatas}
                    keyExtractor={item => item.key}
                    horizontal
                    decelerationRate='fast'
                    snapToInterval={FULL_SIZE}
                    renderItem={({item}) => {
                        return(
                        <TouchableOpacity style={{ width: CELL_WIDTH, height:CELL_HEIGHT, margin: SIZES.padding }} activeOpacity={0.8}
                            onPress={() => navigation.navigate('DinnerDetails', {item})}
                        >
                            <View style={{ flex: 1, padding:SIZES.padding, justifyContent:'center'}}>
                            <SharedElement
                                    id={`item.${item.key}.bg`}
                                    style={[StyleSheet.absoluteFillObject]}
                            >
                                <View 
                                    style={[
                                        StyleSheet.absoluteFillObject, 
                                        {backgroundColor: item.color, 
                                            borderRadius:16
                                        }
                                    ]} 
                                />
                            </SharedElement>
                                
                                <SharedElement
                                    id={`item.${item.key}.meta`}
                                    style={[StyleSheet.absoluteFillObject]}
                                >
                                    <View style={{position:'absolute', top:SIZES.padding, left:SIZES.padding}}>
                                        <Text style={styles.type}>{item.type}</Text>
                                        <Text style={styles.subType}>{item.subType}</Text>
                                    </View>
                                </SharedElement>
                                <SharedElement
                                    id={`item.${item.key}.image`}
                                    style={styles.image}
                                >
                                        <Image source={item.image} style={styles.image} />
                                </SharedElement>
                                
                            </View>
                        </TouchableOpacity>
                        )
                    }}
                />

                {/* render listView food */}
                <FlatList 
                    data={popularFood}
                    keyExtractor={item => item.key}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return (
                            <View style={{flexDirection: 'row', alignItems:'center', padding:SIZES.padding}}>
                                <Image 
                                    source={item.image}
                                    style={styles.popularImage}
                                />
                                <View style={{flex:1}}>
                                    <Text style={styles.popularType}>{item.type}</Text>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <Icon 
                                            name='star-circle-outline'
                                            color={ORANGE}
                                            size={15}
                                        />
                                        <Text style={{ fontWeight: 'bold'}}>{item.rating}</Text>
                                    </View>
                                </View>
                                <Text style={styles.popularPrice}>{item.price}</Text>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    pill:{
        paddingHorizontal:10,
        borderRadius:5,
        paddingVertical:5
    },
    pillText:{
        fontWeight:'bold',
    },
    popularType:{
        fontWeight:'bold',
        fontSize: 16
    },
    popularPrice:{
        fontWeight:'bold'
    },
    popularImage:{
        width:54,
        height:54,
        resizeMode:'contain',
        marginRight:10
    },
    type:{
        fontWeight:'bold',
        fontSize:22
    },
    subType:{
        fontSize:12,
        opacity:0.8
    },
    image:{
        width: CELL_WIDTH * 0.9,
        height: CELL_WIDTH * 0.9,
        alignSelf:'center',
        resizeMode:'contain',
        position:'absolute'
    }
})

export default Dinner

import React ,{useState, useEffect} from 'react'
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
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');
import {moviesDatas} from '../dummyDatas/moviesData'

const SPACING = 10;
const ITEM_SIZE = width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;


const Loading = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.paragraph}>Loading...</Text>
    </View>
  );

  const Backdrop = ({ movies, scrollX }) => {
    return (
      <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={false}
          contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
          renderItem={({ item, index }) => {
            if (!item.backdrop) {
              return null;
            }
            const translateX = scrollX.interpolate({
              inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
              outputRange: [0, width],
              // extrapolate:'clamp'
            });
            return (
              <Animated.View
                removeClippedSubviews={false}
                style={{
                  position: 'absolute',
                  width: translateX,
                  height,
                  overflow: 'hidden',
                }}
              >
                <Image
                  source={item.backdrop}
                  style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    position: 'absolute',
                  }}
                />
              </Animated.View>
            );
          }}
        />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'white']}
          style={{
            height: BACKDROP_HEIGHT,
            width,
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
    );
  };

const Movies = ({navigation}) => {
    const [movies, setMovies] = useState([])
    const scrollX = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        setMovies([{key: 'left-Spacer'}, ...moviesDatas, {key:'right-spacer'}])
    },[])
    
    if(movies.length === 0 ){
        return <Loading />
    }

    function renderMovies(){
        const renderItem = ({item, index}) => {
            if (!item.img) {
                return <View style={{ width: EMPTY_ITEM_SIZE, flexDirection:'row' }} />;
            }

            const inputRange = [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
              ];
    
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [200, 100, 200],
                extrapolate: 'clamp',
              });

            return(
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("MoviesDetails", {item})}
              >
                <View
                style={{ width: ITEM_SIZE, height:height}}
            >
                <Animated.View
                    style={{
                        marginHorizontal:SPACING,
                        padding: SPACING * 2,
                        alignItems:'center',
                        backgroundColor:'#fff',
                        borderRadius:34,
                        transform: [{ translateY }],
                    }}
                >
                    <Image 
                        source={item.img}
                        style={styles.posterImage}
                    />
                    <Text style={{ fontSize:24 }} numberOfLines={1} >{item.title}</Text>

                    <View style={{ flexDirection:'row'}}>
                        <Text style={{ fontSize:12, marginRight:5 }}>{item.rate}</Text>
                        { 
                            [1,2,3,4,5].map((rating) => (
                                    <Icon 
                                        key={(rating)}
                                        name='star-circle-outline'
                                        size={15}
                                        color={rating == item.rating ? '#e45826' : '#dddddd'}
                                    />
                            ))
                        }
                    </View>

                    <Text style={{ fontSize:12, textAlign:'justify' }} numberOfLines={5}>{item.description}</Text>
                </Animated.View>
            </View> 
            </TouchableOpacity>
            )
        }

        return(
            <View>
                <Backdrop  movies={movies} scrollX={scrollX} />
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    keyExtractor={(item) => item.id}
                    horizontal
                    snapToInterval={ITEM_SIZE}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        alignItems:'center',
                    }}
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                      )}
                    snapToAlignment='start'
                    scrollEventThrottle={16}
                    decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
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
                        color='white'          
                    />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            {renderMovies()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
      },
      loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default Movies

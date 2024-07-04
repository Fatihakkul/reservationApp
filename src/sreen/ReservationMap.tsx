import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import MapView, {
  Camera,
  Marker,
  MarkerPressEvent,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {markers, mapStandardStyle} from '../components/mapData';
import {useAppNavigation, useAppSelector} from '../hooks/useAppNavigation';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ReservationMap = () => {
  const reservations = useAppSelector(state => state.appState.reserVation);
  const navigation = useAppNavigation();
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      if (!reservations) return;
      let index = Math.floor(value / CARD_WIDTH + 0.3); 
      if (index >= reservations.length) {
        index = reservations.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      if (mapIndex !== index) {
        mapIndex = index;
        const {latitude, longitude} = reservations[index].city;
        if (_map.current) {
          _map.current.animateToRegion(
            {
              latitude,
              longitude,
              latitudeDelta: 0.04864195044303443,
              longitudeDelta: 0.040142817690068,
            },
            350,
          );
          const newCamera: Camera = {
            center: {
              latitude,
              longitude,
            },
            zoom: 13,
            heading: 0,
            pitch: 0,
            altitude: 5,
          };
          _map.current.animateCamera(newCamera, {duration: 5000});
        }
      }
    });
  });

  const interpolations =
    reservations &&
    reservations.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];

      const scale = mapAnimation.interpolate({
        inputRange,
        outputRange: [1, 1.5, 1],
        extrapolate: 'clamp',
      });

      return {scale};
    });

  const onMarkerPress = (mapEventData: MarkerPressEvent) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current &&
      _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };

  const _map = React.useRef<MapView>(null);
  const _scrollView = React.useRef<ScrollView>(null);

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        initialRegion={{
          latitude: reservations?.[0].city.latitude ?? 36.896893,
          longitude: reservations?.[0].city.longitude ?? 30.713324,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStandardStyle}>
        {reservations &&
          reservations.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations?.[index].scale,
                },
              ],
            };

            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.city.latitude,
                  longitude: marker.city.longitude,
                }}
                onPress={e => {
                  const hotel = reservations[e._targetInst.return.key].city;
                  navigation.navigate('CityReservation', {hotel});
                }}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.Image
                    source={require('../../assets/images/map_marker.png')}
                    style={[styles.marker, scaleStyle]}
                    resizeMode="cover"
                  />
                </Animated.View>
              </Marker>
            );
          })}
      </MapView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {reservations &&
          reservations.map((marker, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  {marker.city.name}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.note}
                </Text>
                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={[
                      styles.signIn,
                      {
                        borderColor: '#FF6347',
                        borderWidth: 1,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: '#FF6347',
                        },
                      ]}>
                      Order Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
      </Animated.ScrollView>
    </View>
  );
};

export default ReservationMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

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
import {useAppNavigation, useAppSelector} from '../hooks/useAppNavigation';
import { mapStandardStyle } from '../helpers/constants';
import Components from '../components';

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
    //@ts-ignore
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
                  //@ts-ignore
                  const hotel = reservations[e._targetInst.return.key].city;
                  navigation.navigate('CityReservation', {hotel});
                }}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.Image
                    source={require('../../assets/images/map_marker.png')}
                    //@ts-ignore
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
              <Components.MapItem item={marker} />
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
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    marginHorizontal: 10,
    width: CARD_WIDTH,
    overflow: 'hidden',
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
  }
});

import {FlatList, View} from 'react-native';
import Components from '../components';
import {useCallback, useState} from 'react';
import {theme} from '../theme';
import {useAppNavigation, useAppSelector} from '../hooks/useAppNavigation';
import {RootStackParamList, TReservationResponse} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'CityReservation'>;

const CityReservations: React.FC<Props> = ({route}) => {
  const navigation = useAppNavigation();
  const reservations = useAppSelector(state => state.appState.reserVation);
  const hotel = route.params.hotel;
  const [visible, setVisible] = useState<boolean>(false);
  const [deleteItemId, setDeleteItemId] = useState<number | undefined>(
    undefined,
  );

  const deleteItem = useCallback((id: number) => {
    setDeleteItemId(id);
    setVisible(true);
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: TReservationResponse; index: number}) => (
      <Components.ReservationItem item={item} deleteItem={deleteItem} />
    ),
    [reservations],
  );

  return (
    <Components.Container full>
      <Components.Header title={hotel.name} goBack />
      <View
        style={[
          theme.layout.w100,
          theme.layout.justifyBetween,
          theme.layout.h100,
          theme.layout.paddingTop
        ]}>
        <FlatList
          data={reservations?.filter(item => item.city.id === hotel.id)}
          renderItem={renderItem}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={[theme.layout.gap]}
        />
      </View>
      <Components.DeleteReservationPopup
        visible={visible}
        setVisible={setVisible}
        itemId={deleteItemId}
      />
    </Components.Container>
  );
};
export default CityReservations;

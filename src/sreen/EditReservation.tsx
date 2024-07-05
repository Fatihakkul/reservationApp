import {useCallback} from 'react';
import Components from '../components';
import {
  useAppDispatch,
  useAppNavigation,
  useAppSelector,
} from '../hooks/useAppNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, TReservation} from '../types';
import {getReservation, updateReservation} from '../services/reservation';
import {Alert} from 'react-native';
import {setReservation} from '../store/slices/appStateSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'EditReservation'>;

const EditReservation: React.FC<Props> = ({route}) => {
  const user = useAppSelector(state => state.appState.user);
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const reservation = route.params.reservation;

  const handleSubmit = useCallback(
    async (data: TReservation) => {
      const res = await updateReservation({
        id: reservation.id,
        date: data.date,
        city: data.city,
        time: data.time,
        note: data.note,
        nickname: data.nickname,
      });
      if (res.data) {
        const reservations = await getReservation();
        dispatch(setReservation(reservations));
        navigation.navigate('Home');
        Alert.alert('', 'Rezervasyonunuz başarıyla güncellendi');
      }
    },
    [reservation],
  );

  return (
    <Components.Container full>
      <Components.Header goBack title="Rezervasyonu Düzenle" />
      {user && (
        <Components.ReservationForm
          user={user}
          onSubmit={handleSubmit}
          data={reservation}
        />
      )}
    </Components.Container>
  );
};
export default EditReservation;

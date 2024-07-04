import {useCallback} from 'react';
import Components from '../components';
import T from '../components/T';
import {useAppDispatch, useAppNavigation, useAppSelector} from '../hooks/useAppNavigation';
import {addReservation, getReservation} from '../services/reservation';
import { THotel } from '../types';
import { Alert } from 'react-native';
import { setReservation } from '../store/slices/appStateSlice';

const NewReservation: React.FC = () => {
  const user = useAppSelector(state => state.appState.user);
  const dispatch = useAppDispatch()
  const navigation = useAppNavigation()

  const handleSubmit = useCallback(
    async (data: {
      note: string;
      city: THotel;
      date: string;
      time: string;
      nickname?: string;
    }) => {
      const res = await addReservation(data);
      if(res.data) {
        const reservations = await getReservation()
        dispatch(setReservation(reservations))
        navigation.navigate('Home')
        Alert.alert("","Reservasyonunuz oluşturulmuştur.")
      }
    },
    [],
  );
  return (
    <Components.Container full>
      <Components.Header title="Rezervasyon Oluştur" goBack />
      <T text={'new reservation'} />
      <Components.ReservationForm user={user} onSubmit={handleSubmit} />
    </Components.Container>
  );
};
export default NewReservation;

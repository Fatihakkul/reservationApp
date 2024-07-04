import {THotel, TReservationResponse} from '.';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  TabNavigator: undefined;
  EditReservation: {reservation: TReservationResponse};
  NewReservation: undefined;
  CityReservation: {hotel: THotel};
};

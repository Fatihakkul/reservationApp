export type TReservation = {
  note: string;
  city: THotel;
  date: string;
  time: string;
  nickname?: string;
};

export interface TReservationResponse extends TReservation {
  id:number
}

export type THotel = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

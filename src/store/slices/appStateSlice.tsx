import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TReservationResponse, TUser} from '../../types';

type AppStateType = {
  user?: TUser;
  reserVation?: TReservationResponse[];
};

const initialState: AppStateType = {
  user: undefined,
  reserVation: [],
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    setReservation: (state, action: PayloadAction<TReservationResponse[]>) => {
      state.reserVation = action.payload;
    },
  },
});

export const {setUser, setReservation} = appStateSlice.actions;

export {appStateSlice};

import React, {useCallback, useState} from 'react';
import PopupProvider from './PopupProvider';
import {theme} from '../../theme';
import {Pressable, View} from 'react-native';
import T from '../T';
import {deleteReservation, getReservation} from '../../services/reservation';
import { useAppDispatch, useAppNavigation } from '../../hooks/useAppNavigation';
import { setReservation } from '../../store/slices/appStateSlice';

interface IDeleteAccountPopupProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  itemId?: number;
}

const DeleteReservationPopup = ({
  visible,
  setVisible,
  itemId,
}: IDeleteAccountPopupProps) => {

  const navigation = useAppNavigation()
  const dispatch = useAppDispatch()
  const deleteItem = useCallback(async () => {
    if (itemId) {
      const res = await deleteReservation(itemId);
      if(res){
        const reservations = await getReservation()
        dispatch(setReservation(reservations))
        navigation.navigate("Home")
        setVisible(false)
      }
    }
  }, [itemId]);

  const renderContent = () => {
    return (
      <View>
        <T text={'Reservationu silmek isteğinize emin misiniz?'} />
        <Pressable onPress={deleteItem}>
          <T text={'Sil'} />
        </Pressable>
        <Pressable onPress={() => setVisible(false)}>
          <T text={'Vazgeç'} />
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <PopupProvider visible={visible} backDropColor={theme.colors.pastel}>
        {renderContent()}
      </PopupProvider>
    </>
  );
};
export default DeleteReservationPopup;

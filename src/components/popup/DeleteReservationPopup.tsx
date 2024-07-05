import React, {useCallback, useState} from 'react';
import PopupProvider from './PopupProvider';
import {theme} from '../../theme';
import {Pressable, View} from 'react-native';
import T from '../T';
import {deleteReservation, getReservation} from '../../services/reservation';
import {useAppDispatch, useAppNavigation} from '../../hooks/useAppNavigation';
import {setReservation} from '../../store/slices/appStateSlice';

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
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const deleteItem = useCallback(async () => {
    if (itemId) {
      const res = await deleteReservation(itemId);
      if (res) {
        const reservations = await getReservation();
        dispatch(setReservation(reservations));
        navigation.navigate('Home');
        setVisible(false);
      }
    }
  }, [itemId]);

  const renderContent = () => {
    return (
      <View
        style={[
          theme.layout.width90,
          theme.backgorunds.bgWhite,
          theme.layout.paddingX_20,
          theme.layout.paddingY2X,
          theme.borders.radius,
          theme.layout.gap2X,
        ]}>
        <T
          style={[theme.text.title]}
          text={'Reservationu silmek isteğinize emin misiniz?'}
        />
        <View
          style={[
            theme.layout.w100,
            theme.layout.justifyBetween,
            theme.layout.alignCenter,
            theme.layout.flexDirectionRow,
          ]}>
          <Pressable onPress={deleteItem}>
            <T
              style={[theme.text.font_16, theme.text.error, theme.text.bold]}
              text={'Sil'}
            />
          </Pressable>
          <Pressable onPress={() => setVisible(false)}>
            <T
              style={[theme.text.font_16, theme.text.colorGray_400, theme.text.bold]}
              text={'Vazgeç'}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <PopupProvider visible={visible}>
        {renderContent()}
      </PopupProvider>
    </>
  );
};
export default DeleteReservationPopup;

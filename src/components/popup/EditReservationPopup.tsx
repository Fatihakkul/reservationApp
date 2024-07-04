import React from 'react';
import PopupProvider from './PopupProvider';
import {theme} from '../../theme';
import {View} from 'react-native';
import T from '../T';

interface IDeleteAccountPopupProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsPopup = ({visible, setVisible}: IDeleteAccountPopupProps) => {
  const renderContent = () => {
    return (
      <View>
        <T text={'elsm'} />
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
export default SettingsPopup;

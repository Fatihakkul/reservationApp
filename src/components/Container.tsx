import React, {PropsWithChildren} from 'react';
import {StyleProp, View,ViewStyle} from 'react-native';
import {theme} from '../theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type TContainer = {
  full?: boolean;
  background?: string;
  style?: StyleProp<ViewStyle>
};

const Container: React.FC<PropsWithChildren<TContainer>> = ({
  children,
  full = false,
  background,
  style
}) => {
  const {top} = useSafeAreaInsets();
  
  return (
    <View
      style={[
        theme.layout.flex,
        theme.layout.alignCenter,
        theme.layout.paddingBottom,
        {backgroundColor: background ?? theme.colors.white},
        full && [theme.layout.paddingX],
        {paddingTop:top},
        style
      ]}>
      {children}
    </View>
  );
};
export default Container;

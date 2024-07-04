import {FC, ReactNode, useCallback} from 'react';
import {View, ViewStyle, Pressable, StyleProp} from 'react-native';
import {theme} from '../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Svg from '../../assets/svg';
import {useAppNavigation} from '../hooks/useAppNavigation';
import T from './T';

type Props = {
  title?: string;
  goBack?: boolean;
  onGoBack?: () => void;
  style?: StyleProp<ViewStyle>;
  customBackIcon?: ReactNode;
  logo?: boolean;
  menu?: boolean;
  settings?: boolean;
  dark?: boolean;
  customBackIconPress?: () => void;
  share?: boolean;
};

const Header: FC<Props> = ({
  goBack,
  title,
  onGoBack,
  style,
  customBackIcon,
  customBackIconPress,
}): ReactNode => {
  const navigation = useAppNavigation();





  const renderGoBack = useCallback(() => {
    if (goBack) {
      return (
        <View
          style={[
            theme.layout.paddingX_20,
            theme.layout.pAbsolute,
            theme.layout.justifyCenter,
            {left: 0, top: 0, bottom: 0},
          ]}>
          <Pressable onPress={() => customBackIconPress ?? navigation.goBack()}>
            {customBackIcon ? (
              customBackIcon
            ) : (
              <View
                style={[
                  theme.layout.flexDirectionRow,
                  theme.layout.gap,
                  theme.layout.alignCenter,
                ]}>
                <AntDesign name="left" color={theme.colors.black} size={25} />
              </View>
            )}
          </Pressable>
        </View>
      );
    }
  }, [goBack, customBackIconPress]);

  const renderTitle = useCallback(() => {
    if (title) {
      return (
        <T
          style={[
            theme.text.font_18,
            theme.text.colorBlack,
            theme.text.upperCase,
          ]}
          weight="700"
          numberOfLines={1}>
          {title}
        </T>
      );
    }
  }, [title]);

  return (
    <View
      style={[
        theme.layout.alignCenter,
        theme.layout.justifyCenter,
        theme.layout.paddingY,
        theme.layout.widthDevice,
        {
          borderBottomWidth: 2,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        style,
      ]}>
      {renderGoBack()}
      {renderTitle()}
    </View>
  );
};

export default Header;

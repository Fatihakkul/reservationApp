import {
    View,
    TouchableOpacity,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    StyleProp,
  } from 'react-native';
  import React from 'react';
  import type {PropsWithChildren} from 'react';
  import {theme} from '../../theme';
  import T from '../T';
  
  type Props = PropsWithChildren<{
    title: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    prepend?: React.ReactNode;
    rightIcon?: (props: any) => JSX.Element;
    loading?: boolean;
    loadingIconColor?: string;
    disabled?: boolean;
  }>;
  
  const CustomButton: React.FC<Props> = ({
    containerStyle,
    title,
    onPress,
    buttonStyle,
    titleStyle,
    loading,
    prepend,
    loadingIconColor,
    disabled,
    rightIcon,
  }) => {
    const RightIcon = rightIcon;
    return (
      <View style={[containerStyle]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            {
              width: '100%',
              backgroundColor: disabled
                ? theme.colors.textColor
                : theme.colors.mainColor,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            theme.layout.paddingY,
            buttonStyle,
            loading
              ? {
                  opacity: 0.7,
                }
              : undefined,
          ]}
          onPress={!loading ? onPress : undefined}
          disabled={disabled}>
          {loading ? (
            <ActivityIndicator color={loadingIconColor ?? theme.colors.white} />
          ) : (
            <>
              {prepend}
              <T
                weight="700"
                style={[theme.text.font_16, theme.text.colorWhite, titleStyle]}>
                {title}
              </T>
              {RightIcon && <RightIcon />}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  export default CustomButton;
  
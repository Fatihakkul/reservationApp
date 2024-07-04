import React, { useCallback, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { theme } from '../../theme';



type Props = {
  containerStyle?: ViewStyle;
  onChangeText?: (text: string) => void;
  value?: string;
  type?: string;
  check?: boolean;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  eyeOffIcon?: boolean;
  checkIcon?: boolean;
  icon?: JSX.Element;
  onBlur?: (...args: any) => void;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoComplete?: TextInputProps['autoComplete'];
  autoCorrect?: boolean;
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  inputMode?: TextInputProps['inputMode'];
  returnKeyType?: TextInputProps['returnKeyType'];
  editable?:boolean
};

const CustomInput: React.FC<Props> = ({
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  checkIcon,
  eyeOffIcon = false,
  onChangeText,
  // label,
  value,
  icon,
  onBlur,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  onSubmitEditing,
  inputMode,
  returnKeyType,
  editable
}): JSX.Element | null => {
  const [secureText, setSecureText] = useState<boolean>(
    secureTextEntry || false
  );

  const handleToggle = useCallback(() => {
    setSecureText((prev) => !prev);
  }, []);

  return (
    <View
      style={{
        paddingLeft: 20,
        height: 60,
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.pastel,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 16,
          color: theme.colors.mainColor,
         
        }}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'#A7AFB7'}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        autoComplete={autoComplete}
        value={value}
        onBlur={onBlur}
        autoCorrect={autoCorrect}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
        inputMode={inputMode}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};

export default CustomInput;

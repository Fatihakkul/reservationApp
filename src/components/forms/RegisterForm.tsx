import {Controller, useForm} from 'react-hook-form';
import {Alert, Text, View} from 'react-native';
import {theme} from '../../theme';
import CustomButton from '../custom/CustomButton';
import {useCallback} from 'react';
import {register} from '../../services/authService';
import CustomInput from '../custom/CustomInput';
import {useAppNavigation} from '../../hooks/useAppNavigation';

const RegisterForm: React.FC = () => {
  const navigation = useAppNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
    },
  });

  const handeleRegister = useCallback(
    async (data: {nickname: string; email: string; password: string}) => {
      const res = await register({
        nickname: data.nickname,
        password: data.password,
        email: data.email,
      });
      if (res.data) {
        Alert.alert('', 'Kaydınız başarıyla oluşturulmuştur');
        navigation.navigate('Login');
      }
    },
    [control],
  );

  return (
    <View style={[theme.layout.marginTop, theme.layout.gap]}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder="Adınız"
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
            value={value}
          />
        )}
        name="nickname"
      />
      {errors.nickname && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.nickname?.message != ''
            ? errors.nickname?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.email?.message != ''
            ? errors.email?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder="Şifre"
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.password?.message != ''
            ? errors.password?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}
      <CustomButton onPress={handleSubmit(handeleRegister)} title="Kayıt ol" />
    </View>
  );
};
export default RegisterForm;

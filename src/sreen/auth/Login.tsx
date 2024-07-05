import {useCallback, useState} from 'react';
import {Alert, View} from 'react-native';
import Components from '../../components';
import {useAppDispatch, useAppNavigation} from '../../hooks/useAppNavigation';
import {login} from '../../services/authService';
import {theme} from '../../theme';
import {setReservation, setUser} from '../../store/slices/appStateSlice';
import {getReservation} from '../../services/reservation';

const Login: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [txt, setTxt] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = useCallback(async () => {
    try {
      const res = await login({nickname: txt, password: password});
      if (res) {
        const reservations = await getReservation();
        dispatch(setUser(res));
        dispatch(setReservation(reservations));
        navigation.navigate('TabNavigator');
      }
    } catch (error:any) {
      //@ts-ignore
      if(error?.status === 404){
        navigation.navigate("Register")
      }
      Alert.alert('', error?.message);
    }
  }, [txt, password]);

  return (
    <Components.Container full>
      <Components.Header title="Giriş Yap" />
      <View style={[theme.layout.gap, theme.layout.marginTop]}>
        <Components.CustomInput
          placeholder="Kullanıcı adınızı giriniz"
          value={txt}
          onChangeText={setTxt}
        />
        <Components.CustomInput
          placeholder="Şifrenizi giriniz"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Components.CustomButton onPress={handleLogin} title="Giriş Yap" />
        <Components.CustomButton
          onPress={() => navigation.navigate('Register')}
          title="Kayı ol"
        />
      </View>
    </Components.Container>
  );
};
export default Login;

import {FlatList, Platform, View} from 'react-native';
import Components from '../components';
import {useCallback, useEffect, useState} from 'react';
import {theme} from '../theme';
import {useAppNavigation, useAppSelector} from '../hooks/useAppNavigation';
import { TReservationResponse} from '../types';

const Home: React.FC = () => {
  const navigation = useAppNavigation();
  const reservations = useAppSelector(state => state.appState.reserVation);
  const [visible, setVisible] = useState<boolean>(false);
  const [deleteItemId, setDeleteItemId] = useState<number | undefined>(
    undefined,
  );

  const deleteItem = useCallback((id: number) => {
    setDeleteItemId(id);
    setVisible(true);
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: TReservationResponse; index: number}) => (
      <Components.ReservationItem item={item} deleteItem={deleteItem} />
    ),
    [reservations],
  );

  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.addListener('beforeRemove', nav => {
        if (nav.data.action.type === 'GO_BACK') {
          nav.preventDefault();
        }
      });
    }
  }, [navigation]);

  return (
    <Components.Container full>
      <Components.Header title="Ana Sayfa" />
      <View
        style={[
          theme.layout.w100,
          theme.layout.justifyBetween,
          theme.layout.h90,
        ]}>
        <View
          style={[
            theme.layout.w100,
            theme.layout.paddingBottom,
            theme.layout.paddingTop,
          ]}>
          <FlatList
            data={reservations}
            renderItem={renderItem}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={[theme.layout.gap]}
          />
        </View>
        <View>
          <Components.CustomButton
            onPress={() => navigation.navigate('NewReservation')}
            title="Yeni Rezervasyon"
          />
        </View>
      </View>
      <Components.DeleteReservationPopup
        visible={visible}
        setVisible={setVisible}
        itemId={deleteItemId}
      />
    </Components.Container>
  );
};
export default Home;

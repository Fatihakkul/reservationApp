import {memo} from 'react';
import {Pressable, View} from 'react-native';
import {theme} from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import T from '../T';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {TReservationResponse} from '../../types';
import {format} from 'date-fns/format';

interface IReservationItemProps {
  deleteItem: (id: number) => void;
  item: TReservationResponse;
}

const ReservationItem: React.FC<IReservationItemProps> = ({
  deleteItem,
  item,
}) => {
  const navigation = useAppNavigation();
  return (
    <View
      style={[
        theme.backgorunds.bgPrimaryColor,
        theme.layout.w100,
        theme.layout.paddingY,
        theme.layout.paddingX,
        theme.layout.flexDirectionRow,
        theme.layout.justifyBetween,
        theme.borders.radius,
      ]}>
      <View style={[theme.layout.width90_Layout]}>
        <View
          style={[theme.layout.flexDirectionRow, theme.layout.justifyBetween]}>
          <T text={item.city.name} />
          <View>
            <T text={format(new Date(item.date), 'dd/MM/yyyy')} />
            <T text={item.time} />
          </View>
        </View>
        <T text={item.note} />
      </View>
      <View style={[theme.layout.justifyBetween]}>
        <Pressable onPress={() => navigation.navigate('EditReservation',{reservation: item})}>
          <AntDesign name="edit" size={20} />
        </Pressable>
        <Pressable onPress={() => deleteItem(item.id)}>
          <AntDesign name="delete" size={20} />
        </Pressable>
      </View>
    </View>
  );
};
export default memo(ReservationItem);

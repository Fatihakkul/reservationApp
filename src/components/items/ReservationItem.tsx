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
        theme.layout.paddingY_15,
        theme.layout.paddingX,
        theme.layout.flexDirectionRow,
        theme.layout.justifyBetween,
        theme.borders.radius,
      ]}>
      <View style={[theme.layout.width90_Layout]}>
        <View
          style={[theme.layout.flexDirectionRow, theme.layout.justifyBetween]}>
          <T style={[theme.text.colorWhite]} text={item.city.name} />
          <View>
            <T
              style={[theme.text.colorWhite]}
              text={format(new Date(item.date), 'dd/MM/yyyy')}
            />
            <T style={[theme.text.colorWhite]} text={item.time} />
          </View>
        </View>
        <T style={[theme.text.colorWhite]} text={item.note} />
      </View>
      <View style={[theme.layout.justifyBetween]}>
        <Pressable
          onPress={() =>
            navigation.navigate('EditReservation', {reservation: item})
          }>
          <AntDesign name="edit" size={20} color={theme.colors.white} />
        </Pressable>
        <Pressable onPress={() => deleteItem(item.id)}>
          <AntDesign name="delete" size={20} color={theme.colors.white} />
        </Pressable>
      </View>
    </View>
  );
};
export default memo(ReservationItem);

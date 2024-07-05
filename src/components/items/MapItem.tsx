import {memo} from 'react';
import {Pressable, View} from 'react-native';
import {theme} from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import T from '../T';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {TReservationResponse} from '../../types';
import {format} from 'date-fns/format';

interface IReservationItemProps {
  item: TReservationResponse;
}

const MapItem: React.FC<IReservationItemProps> = ({item}) => {
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
      <View>
        <T style={[theme.text.colorWhite]} text={item.city.name} />
        <T style={[theme.text.colorWhite]} text={item.note} />
      </View>

      <View>
        <T
          style={[theme.text.colorWhite]}
          text={format(new Date(item.date), 'dd/MM/yyyy')}
        />
        <T style={[theme.text.colorWhite]} text={item.time} />
      </View>
    </View>
  );
};
export default memo(MapItem);

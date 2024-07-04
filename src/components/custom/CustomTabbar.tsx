import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {tabs} from '../../helpers/constants';
import { theme } from '../../theme';
import TabItem from '../items/TabItem';

type Props = {
  currentTabScreen: string;
};

const CustomTabbar = ({currentTabScreen}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          styles.root,
          theme.backgorunds.shadow2X,
          {
            paddingBottom: 14 + insets.bottom,
          },
        ]}>
        {tabs.map((tab, index) => {
          return (
            <TabItem
              key={index}
              tab={tab}
              currentTabScreen={currentTabScreen}
            />
          );
        })}
      </View>
    </>
  );
};
export default CustomTabbar;

type Style = {
  root: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: theme.colors.white,
  },
});

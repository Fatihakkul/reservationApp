import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import {Platform, View} from 'react-native';
import {theme} from '../theme';

type Props = PickerSelectProps;
const SelectField = ({style, ...props}: Props) => {
  return (
    <View
      style={{
        position: 'relative',
      }}>
      <RNPickerSelect
        style={{
          ...style,
          viewContainer: [
            {
              height: 60,
              width: '100%',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: theme.colors.pastel,
              backgroundColor: theme.colors.white,
              borderWidth: 1,
            },
            style?.viewContainer,
          ],
          inputAndroidContainer: [
            {
              paddingLeft: 20,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            },
            style?.inputAndroidContainer,
          ],
          inputIOSContainer: [
            {
              paddingLeft: 20,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            },
            style?.inputIOSContainer,
          ],
          placeholder: [
            {
              fontSize: 16,
            },
            style?.placeholder,
          ],
        }}
        {...props}
      />
    </View>
  );
};
export default SelectField;

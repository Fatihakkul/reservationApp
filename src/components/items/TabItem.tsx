import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {theme} from '../../theme';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {TTabs} from '../../types';
import T from '../T';

type Props = {
  tab: TTabs;
  currentTabScreen: string;
};

const TabItem: React.FC<Props> = ({tab, currentTabScreen}): JSX.Element => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate(tab.name)}
      style={{
        alignItems: 'center',
        width: (Dimensions.get('window').width - 40) / 2,
        zIndex: 10,
      }}>
      {tab.name === currentTabScreen ? <tab.fillIcon /> : <tab.icon />}

      <T
        style={[
          theme.text.font_10,
          {
            textAlign: 'center',
            textTransform: 'uppercase',
            marginTop: 4,
            color:
              currentTabScreen === tab.name
                ? theme.colors.mainColor
                : theme.colors.gray,
          },
        ]}
        weight="500">
        {tab.label || tab.name}
      </T>
    </TouchableOpacity>
  );
};

export default TabItem;

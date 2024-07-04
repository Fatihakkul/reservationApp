import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';


export interface TProps {
  children?: React.ReactNode;
  weight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  style?: StyleProp<TextStyle>;
  text?: String;
  props?: any;
  numberOfLines?:number
}

 function T({
  children,
  weight = '400',
  style,
  text,
  numberOfLines,
  ...props
}: TProps) {

  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[style]}>
      {text ? text : children}
    </Text>
  );
}

export default T

import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={22.5}
        cy={22.5}
        r={22}
        fill={props.cirleFill ?? '#000'}
        fillOpacity={0.5}
        stroke={props.stroke ?? '#fff'}
      />
      <Path d="M32 23l-15-8.75v17.5L32 23z" fill={props.stroke ?? '#fff'} />
    </Svg>
  );
}

export default SvgComponent;

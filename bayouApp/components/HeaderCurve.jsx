import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function HeaderCurve({ height = 60, color = '#fff' }) {
  const curve = `
    M0,0
    Q${width / 2},${height * 2} ${width},0
    L${width},${height}
    L0,${height}
    Z
  `;

  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Path d={curve} fill={color} />
    </Svg>
  );
}

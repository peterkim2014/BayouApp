// components/icons/UpArrow.js
import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function UpArrow({ width = 18, height = 18, color = '#333' }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 8l-6 6h12l-6-6z"
        fill={color}
      />
    </Svg>
  );
}

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../style/colors';

export function LeftArrow() {
  return (
    <Svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18L9 12L15 6"
        stroke={colors.white}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

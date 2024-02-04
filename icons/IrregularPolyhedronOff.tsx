import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIrregularPolyhedronOff = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className=""
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.706 4.73a1 1 0 0 0-.458 1.14L6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503q.06-.024.116-.055m-.474-4.474L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L7.578 3.574" />
    <Path d="M4.5 5.5q.991.32 1.5.5m6 2c.29-.003.603-.06.878-.17L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l.742-.265m2.956-1.057q.468-.166 1.512-.54M12 22V12M3 3l18 18" />
  </Svg>
);
export default SvgIrregularPolyhedronOff;

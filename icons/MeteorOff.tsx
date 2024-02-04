import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMeteorOff = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-meteor-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9.75 5.761 13 3l-1 5 9-5-5 9h5l-2.467 2.536m-1.983 2.04-2.441 2.51A6.5 6.5 0 1 1 5.254 9.58l2.322-1.972" />
    <Path d="M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M3 3l18 18" />
  </Svg>
);
export default SvgMeteorOff;

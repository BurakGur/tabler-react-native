import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWavesElectricity = ({
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
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 16c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M3 8c.576-.643 1.512-1.017 2.5-1 .988-.017 1.924.357 2.5 1s1.512 1.017 2.5 1c.988.017 1.924-.357 2.5-1M20 7l-3 5h4l-3 5" />
  </Svg>
);
export default SvgWavesElectricity;

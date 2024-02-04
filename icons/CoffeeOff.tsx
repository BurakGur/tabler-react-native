import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoffeeOff = ({
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
    className="icon icon-tabler icon-tabler-coffee-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1 .73-.565 1.783-.923 3-.99M8 3q-.292.211-.506.49M12 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
    <Path d="M14 10h3v3m-.257 3.743A6 6 0 0 1 11 21H9a6 6 0 0 1-6-6v-5h7" />
    <Path d="M20.116 16.124a3 3 0 0 0-3.118-4.953M3 3l18 18" />
  </Svg>
);
export default SvgCoffeeOff;

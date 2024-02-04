import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCeOff = ({
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
    className="icon icon-tabler icon-tabler-ce-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 4a8 8 0 0 0-2.581.426M5.867 5.864A8 8 0 0 0 11 20M20 4a8 8 0 0 0-7.29 4.7M12 12a8 8 0 0 0 8 8M16 12h4M3 3l18 18" />
  </Svg>
);
export default SvgCeOff;

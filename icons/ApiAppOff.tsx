import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgApiAppOff = ({
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
    <Path d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6M15 15v3.5a2.5 2.5 0 1 1-5 0V18M13 9h5.5a2.5 2.5 0 1 1 0 5H18M9 12V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18" />
  </Svg>
);
export default SvgApiAppOff;

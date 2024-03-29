import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGiftOff = ({
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
    <Path d="M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-4 0H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4M12 12v9" />
    <Path d="M19 12v3m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1-2.457-2.963m2.023-2Q7.277 3.001 7.5 3c1.974-.034 3.76 1.95 4.5 5 .74-3.05 2.526-5.034 4.5-5a2.5 2.5 0 1 1 0 5M3 3l18 18" />
  </Svg>
);
export default SvgGiftOff;

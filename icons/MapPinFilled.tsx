import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPinFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
  </Svg>
);
export default SvgMapPinFilled;

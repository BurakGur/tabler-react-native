import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlertSquareRoundedOff = ({
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
    <Path d="M19.201 19.199C17.851 20.549 15.601 21 12 21c-7.2 0-9-1.8-9-9 0-3.598.45-5.847 1.797-7.197m2.626-1.376C8.627 3.12 10.132 3 12 3c7.2 0 9 1.8 9 9 0 1.865-.12 3.367-.425 4.57M12 7v1M12 16h.01M3 3l18 18" />
  </Svg>
);
export default SvgAlertSquareRoundedOff;

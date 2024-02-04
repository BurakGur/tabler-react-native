import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMessageCircleOff = ({
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
    className="icon icon-tabler icon-tabler-message-circle-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.595 4.577c3.223-1.176 7.025-.61 9.65 1.63 2.982 2.543 3.601 6.523 1.636 9.66m-1.908 2.109C15.186 20.166 11.083 20.642 7.7 19L3 20l1.3-3.9C2.071 12.804 2.806 8.589 5.98 6.043M3 3l18 18" />
  </Svg>
);
export default SvgMessageCircleOff;

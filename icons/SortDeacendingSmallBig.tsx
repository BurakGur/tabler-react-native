import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortDeacendingSmallBig = ({
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
    <Path d="m10 15-3 3-3-3M7 6v12M14 18.333c0 .369.298.667.667.667h2.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667h-2.666a.667.667 0 0 0-.667.667zM14 10.833c0 .645.522 1.167 1.167 1.167h4.666c.645 0 1.167-.522 1.167-1.167V6.167C21 5.522 20.478 5 19.833 5h-4.666C14.522 5 14 5.522 14 6.167z" />
  </Svg>
);
export default SvgSortDeacendingSmallBig;

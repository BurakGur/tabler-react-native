import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowNarrowUp = ({
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
    <Path d="M12 5v14M16 9l-4-4M8 9l4-4" />
  </Svg>
);
export default SvgArrowNarrowUp;

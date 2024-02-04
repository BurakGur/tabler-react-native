import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGripVertical = ({
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
    className="icon icon-tabler icon-tabler-grip-vertical"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgGripVertical;

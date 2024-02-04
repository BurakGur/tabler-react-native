import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTree = ({
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
    <Path d="m12 13-2-2M12 12l2-2M12 21V8M9.824 16a3 3 0 0 1-2.743-3.69 3 3 0 0 1 .304-4.833A3 3 0 0 1 12 3.77a3 3 0 0 1 4.614 3.707 3 3 0 0 1 .305 4.833A3 3 0 0 1 14 16.005h-4z" />
  </Svg>
);
export default SvgTree;

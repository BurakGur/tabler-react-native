import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGraphFilled = ({
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
      d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-2.293 6.293a1 1 0 0 0-1.414 0L12 11.585l-1.293-1.292a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083L10 12.415l1.293 1.292.094.083a1 1 0 0 0 1.32-.083L15 11.415l1.293 1.292a1 1 0 0 0 1.414-1.414z"
    />
  </Svg>
);
export default SvgGraphFilled;

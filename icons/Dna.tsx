import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDna = ({
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
    <Path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656" />
    <Path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 0 0 5.657 5.657" />
  </Svg>
);
export default SvgDna;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldMinus = ({
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
    <Path d="M20.483 15.006a9 9 0 1 0-7.958 5.978M3.6 9h16.8M3.6 15h16.8" />
    <Path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a16.94 16.94 0 0 1 2.307 12M16 19h6" />
  </Svg>
);
export default SvgWorldMinus;

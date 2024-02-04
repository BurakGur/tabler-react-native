import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIroningSteam = ({
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
    <Path d="M12 19v2M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464.81 4.865A1 1 0 0 1 19.82 16H3a7 7 0 0 1 7-7h9.8M8 19l-1 2M16 19l1 2" />
  </Svg>
);
export default SvgIroningSteam;

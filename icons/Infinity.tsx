import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInfinity = ({
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
    className="icon icon-tabler icon-tabler-infinity"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9.828 9.172a4 4 0 1 0 0 5.656A10 10 0 0 0 12 12a10 10 0 0 1 2.172-2.828 4 4 0 1 1 0 5.656A10 10 0 0 1 12 12a10 10 0 0 0-2.172-2.828" />
  </Svg>
);
export default SvgInfinity;

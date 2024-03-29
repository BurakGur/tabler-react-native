import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAccessPointOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m3 3 18 18M14.828 9.172A4 4 0 0 1 16 12M17.657 6.343a8 8 0 0 1 1.635 8.952M9.168 14.828a4 4 0 0 1 0-5.656M6.337 17.657a8 8 0 0 1 0-11.314" />
  </Svg>
);
export default SvgAccessPointOff;

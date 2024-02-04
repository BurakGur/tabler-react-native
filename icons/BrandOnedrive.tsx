import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandOnedrive = ({
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
    <Path d="M18.456 10.45a6.45 6.45 0 0 0-12-2.151 4.857 4.857 0 0 0-4.44 5.241 4.856 4.856 0 0 0 5.236 4.444h10.751a3.77 3.77 0 0 0 3.99-3.54 3.77 3.77 0 0 0-3.538-3.992z" />
  </Svg>
);
export default SvgBrandOnedrive;

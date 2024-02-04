import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldCode = ({
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
    <Path d="M20.942 13.02a9 9 0 1 0-9.47 7.964M3.6 9h16.8M3.6 15h9.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </Svg>
);
export default SvgWorldCode;

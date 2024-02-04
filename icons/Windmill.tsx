import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindmill = ({
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
    <Path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zM12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zM12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12z" />
  </Svg>
);
export default SvgWindmill;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAirbnb = ({
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
    <Path d="M12 10q-3 0-3 3c0 1.5 1.494 3.535 3 5.5 1 1 1.5 1.5 2.5 2s2.5 1 4.5-.5 1.5-3.5.5-6-2.333-5.5-5-9.5C13.666 3.5 13 3 11.997 3c-1 0-1.623.45-2.497 1.5-2.667 4-4 7-5 9.5S3 18.5 5 20s3.5 1 4.5.5 1.5-1 2.5-2c1.506-1.965 3-4 3-5.5q0-3-3-3" />
  </Svg>
);
export default SvgBrandAirbnb;

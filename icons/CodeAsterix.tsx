import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCodeAsterix = ({
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
    <Path d="M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2M12 11.875l3-1.687M12 11.875v3.375M12 11.875l-3-1.687M12 11.875l3 1.688M12 8.5v3.375M12 11.875l-3 1.688M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
  </Svg>
);
export default SvgCodeAsterix;

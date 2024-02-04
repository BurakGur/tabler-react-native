import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLocationFilled = ({
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
    className="icon icon-tabler icon-tabler-location-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M20.891 2.006 20.997 2l.13.008.09.016.123.035.107.046.1.057.09.067.082.075.052.059.082.116.052.096q.07.15.09.316l.005.106q0 .113-.024.22l-.035.123-6.532 18.077A1.55 1.55 0 0 1 14 22.32a1.55 1.55 0 0 1-1.329-.747l-.065-.127-3.352-6.702-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07 18.017-6.506.106-.03.108-.018z"
    />
  </Svg>
);
export default SvgLocationFilled;

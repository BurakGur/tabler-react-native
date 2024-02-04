import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhotoSensor3 = ({
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
    <Path d="M17 4h1a2 2 0 0 1 2 2v1M20 17v1a2 2 0 0 1-2 2h-1M7 20H6a2 2 0 0 1-2-2v-1M4 7V6a2 2 0 0 1 2-2h1M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 18v2M4 12h2M12 4v2M20 12h-2" />
  </Svg>
);
export default SvgPhotoSensor3;

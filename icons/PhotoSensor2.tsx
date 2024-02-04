import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhotoSensor2 = ({
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
    <Path d="M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M7 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
  </Svg>
);
export default SvgPhotoSensor2;

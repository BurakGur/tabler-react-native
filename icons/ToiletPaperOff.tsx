import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgToiletPaperOff = ({
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
    <Path d="M4.27 4.28C3.502 5.55 3 7.639 3 10c0 3.866 1.343 7 3 7s3-3.134 3-7q0-.509-.03-1M21 10c0-3.866-1.343-7-3-7M7 3h11M21 10v7m-1.513 2.496L18 19l-3 2-3-3-3 2V10M6 10h.01M3 3l18 18" />
  </Svg>
);
export default SvgToiletPaperOff;

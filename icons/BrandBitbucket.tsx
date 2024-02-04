import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBitbucket = ({
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
    <Path d="M3.648 4a.64.64 0 0 0-.64.744l3.14 14.528c.07.417.43.724.852.728h10a.644.644 0 0 0 .642-.539l3.35-14.71a.64.64 0 0 0-.64-.744z" />
    <Path d="M14 15h-4L9 9h6z" />
  </Svg>
);
export default SvgBrandBitbucket;

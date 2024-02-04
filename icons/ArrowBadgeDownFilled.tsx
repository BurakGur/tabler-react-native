import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBadgeDownFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M16.375 6.22 12 9.718l-4.375-3.5A1 1 0 0 0 6 7v6a1 1 0 0 0 .375.78l5 4a1 1 0 0 0 1.25 0l5-4A1 1 0 0 0 18 13V7a1 1 0 0 0-1.625-.78"
    />
  </Svg>
);
export default SvgArrowBadgeDownFilled;

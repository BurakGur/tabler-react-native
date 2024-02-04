import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBadgeRightFilled = ({
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
      d="m7 6-.112.006a1 1 0 0 0-.669 1.619L9.72 12l-3.5 4.375A1 1 0 0 0 7 18h6a1 1 0 0 0 .78-.375l4-5a1 1 0 0 0 0-1.25l-4-5A1 1 0 0 0 13 6z"
    />
  </Svg>
);
export default SvgArrowBadgeRightFilled;

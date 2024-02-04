import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBadgeUpFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="m11.375 6.22-5 4A1 1 0 0 0 6 11v6l.006.112a1 1 0 0 0 1.619.669L12 14.28l4.375 3.5A1 1 0 0 0 18 17v-6a1 1 0 0 0-.375-.78l-5-4a1 1 0 0 0-1.25 0"
    />
  </Svg>
);
export default SvgArrowBadgeUpFilled;

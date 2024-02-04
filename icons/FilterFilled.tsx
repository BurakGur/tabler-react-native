import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilterFilled = ({
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
      d="M20 3H4a1 1 0 0 0-1 1v2.227l.008.223a3 3 0 0 0 .772 1.795L8 12.886V21a1 1 0 0 0 1.316.949l6-2 .108-.043A1 1 0 0 0 16 19v-6.586l4.121-4.12A3 3 0 0 0 21 6.171V4a1 1 0 0 0-1-1"
    />
  </Svg>
);
export default SvgFilterFilled;

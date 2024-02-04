import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareChevronRightFilled = ({
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
    className="icon icon-tabler icon-tabler-square-chevron-right-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7.387 6.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L12.585 12l-2.292 2.293-.083.094a1 1 0 0 0 1.497 1.32l3-3 .083-.094a1 1 0 0 0-.083-1.32l-3-3z"
    />
  </Svg>
);
export default SvgSquareChevronRightFilled;

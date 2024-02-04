import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCraneOff = ({
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
    className="icon icon-tabler icon-tabler-crane-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6 21h6M9 21V9M9 5V3L8 4M6 6 3 9h6M13 9h8M9 3l10 6M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1-2-2M3 3l18 18" />
  </Svg>
);
export default SvgCraneOff;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquare9Filled = ({
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
    className="icon icon-tabler icon-tabler-square-9-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM13 7h-2l-.15.005a2 2 0 0 0-1.844 1.838L9 9v2l.005.15a2 2 0 0 0 1.838 1.844L11 13h2v2h-2l-.007-.117A1 1 0 0 0 9 15a2 2 0 0 0 1.85 1.995L11 17h2l.15-.005a2 2 0 0 0 1.844-1.838L15 15V9l-.005-.15a2 2 0 0 0-1.838-1.844zm0 2v2h-2V9z"
    />
  </Svg>
);
export default SvgSquare9Filled;

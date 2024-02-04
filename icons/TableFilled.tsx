import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTableFilled = ({
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
    className="icon icon-tabler icon-tabler-table-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-2.995-2.824L3 18v-6a1 1 0 0 1 1-1M21 12v6a3 3 0 0 1-2.824 2.995L18 21h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1M18 3a3 3 0 0 1 2.995 2.824L21 6v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 4v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a3 3 0 0 1 2.824-2.995L6 3h2a1 1 0 0 1 1 1"
    />
  </Svg>
);
export default SvgTableFilled;

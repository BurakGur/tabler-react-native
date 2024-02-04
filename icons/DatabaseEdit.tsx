import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabaseEdit = ({
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
    className="icon icon-tabler icon-tabler-database-edit"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3q.718 0 1.402-.046M20 12V6" />
    <Path d="M4 12v6c0 1.526 3.04 2.786 6.972 2.975M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
  </Svg>
);
export default SvgDatabaseEdit;

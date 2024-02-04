import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabaseExclamation = ({
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
    className="icon icon-tabler icon-tabler-database-exclamation"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3 1.118 0 2.182-.086 3.148-.241M20 12V6" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3 1.064 0 2.079-.078 3.007-.22M19 16v3M19 22v.01" />
  </Svg>
);
export default SvgDatabaseExclamation;

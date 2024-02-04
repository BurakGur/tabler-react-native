import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDnaOff = ({
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
    className="icon icon-tabler icon-tabler-dna-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M16 12a3.9 3.9 0 0 0-1.172-2.828A4.03 4.03 0 0 0 12 8M9.172 9.172a4 4 0 1 0 5.656 5.656" />
    <Path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 1 0 5.657 5.657M3 3l18 18" />
  </Svg>
);
export default SvgDnaOff;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKayak = ({
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
    <Path d="M6.414 6.414a2 2 0 0 0 0-2.828L5 2.172 2.172 5l1.414 1.414a2 2 0 0 0 2.828 0M17.586 17.586a2 2 0 0 0 0 2.828L19 21.828 21.828 19l-1.414-1.414a2 2 0 0 0-2.828 0M6.5 6.5l11 11M22 2.5C12.017 5.101 4.373 10.452 2 22c9.983-2.601 17.627-7.952 20-19.5M6.5 12.5l5 5M12.5 6.5l5 5" />
  </Svg>
);
export default SvgKayak;

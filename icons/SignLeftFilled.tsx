import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSignLeftFilled = ({
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
      d="M14 2a1 1 0 0 1 .993.883L15 3v2h3a1 1 0 0 1 .993.883L19 6v5a1 1 0 0 1-.883.993L18 12h-3v8h1a1 1 0 0 1 .117 1.993L16 22h-4a1 1 0 0 1-.117-1.993L12 20h1v-8H8a1 1 0 0 1-.694-.28l-.087-.095-2-2.5a1 1 0 0 1-.072-1.147l.072-.103 2-2.5a1 1 0 0 1 .652-.367L8 5h5V3a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgSignLeftFilled;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlassOff = ({
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
    <Path d="M8 21h8M12 16v5M17 5l1 6c0 .887-.233 1.685-.646 2.37m-2.083 1.886c-.941.48-2.064.744-3.271.744-3.314 0-6-1.988-6-5l.711-4.268" />
    <Path d="M10.983 6.959q.494.04 1.017.041c2.761 0 5-.895 5-2s-2.239-2-5-2c-1.716 0-3.23.346-4.13.872M3 3l18 18" />
  </Svg>
);
export default SvgGlassOff;

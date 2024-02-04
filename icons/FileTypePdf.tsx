import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileTypePdf = ({
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
    className="icon icon-tabler icon-tabler-file-type-pdf"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M5 18h1.5a1.5 1.5 0 0 0 0-3H5v6M17 18h2M20 15h-3v6M11 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
  </Svg>
);
export default SvgFileTypePdf;

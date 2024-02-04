import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBigUpLineFilled = ({
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
      d="M10.586 3 4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v5a1 1 0 0 0 1 1h6l.117-.007A1 1 0 0 0 16 18l-.001-5h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0M15 20a1 1 0 0 1 .117 1.993L15 22H9a1 1 0 0 1-.117-1.993L9 20z"
    />
  </Svg>
);
export default SvgArrowBigUpLineFilled;

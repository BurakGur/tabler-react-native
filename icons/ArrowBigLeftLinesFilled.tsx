import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBigLeftLinesFilled = ({
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
    className="icon icon-tabler icon-tabler-arrow-big-left-lines-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M9.586 4 3 10.586a2 2 0 0 0 0 2.828L9.586 20a2 2 0 0 0 2.18.434l.145-.068A2 2 0 0 0 13 18.586V16h2a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 15 8l-2-.001V5.414A2 2 0 0 0 9.586 4M21 8a1 1 0 0 1 .993.883L22 9v6a1 1 0 0 1-1.993.117L20 15V9a1 1 0 0 1 1-1M18 8a1 1 0 0 1 .993.883L19 9v6a1 1 0 0 1-1.993.117L17 15V9a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgArrowBigLeftLinesFilled;

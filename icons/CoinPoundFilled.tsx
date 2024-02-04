import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoinPoundFilled = ({
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
    className="icon icon-tabler icon-tabler-coin-pound-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M13 6a3 3 0 0 0-3 3v2H9a1 1 0 0 0-.993.883L8 12a1 1 0 0 0 1 1h1v1a1 1 0 0 1-.77.974l-.113.02L9 15c-1.287 0-1.332 1.864-.133 1.993L9 17h6a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 15 15h-3.171l.048-.148A3 3 0 0 0 12 14v-1h1a1 1 0 0 0 .993-.883L14 12a1 1 0 0 0-1-1h-1V9a1 1 0 0 1 .883-.993L13 8a1 1 0 0 1 .993.883L14 9a1 1 0 0 0 2 0 3 3 0 0 0-3-3"
    />
  </Svg>
);
export default SvgCoinPoundFilled;

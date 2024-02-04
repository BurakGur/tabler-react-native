import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareAsteriskFilled = ({
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
    className="icon icon-tabler icon-tabler-square-asterisk-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5.5a1 1 0 0 0-1 1v1.631l-1.445-.963-.101-.06a1 1 0 0 0-1.009 1.724L10.195 12l-1.75 1.169-.093.07a1 1 0 0 0 1.203 1.594L11 13.868V15.5l.007.117A1 1 0 0 0 13 15.5v-1.631l1.445.963.101.06a1 1 0 0 0 1.009-1.724l-1.752-1.169 1.752-1.167.093-.07a1 1 0 0 0-1.203-1.594L13 10.13V8.5l-.007-.117A1 1 0 0 0 12 7.5"
    />
  </Svg>
);
export default SvgSquareAsteriskFilled;

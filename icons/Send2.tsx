import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSend2 = ({
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
    className="icon icon-tabler icon-tabler-send-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.698 4.034 21 12 4.698 19.966a.5.5 0 0 1-.546-.124.56.56 0 0 1-.12-.568L6.5 12 4.032 4.726a.56.56 0 0 1 .12-.568.5.5 0 0 1 .546-.124M6.5 12H21" />
  </Svg>
);
export default SvgSend2;

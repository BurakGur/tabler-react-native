import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperBagOff = ({
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
    className="icon icon-tabler icon-tabler-paper-bag-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7.158 3.185C7.414 3.066 7.7 3 8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888A5 5 0 0 1 20 13.18V16m-.177 3.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2v-5.82a5 5 0 0 1 .528-2.236L6 8V6" />
    <Path d="M13.185 13.173a2 2 0 1 0 2.64 2.647M6 21a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236L6 8M11 7h2M3 3l18 18" />
  </Svg>
);
export default SvgPaperBagOff;

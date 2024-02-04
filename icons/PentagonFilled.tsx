import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPentagonFilled = ({
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
    className="icon icon-tabler icon-tabler-pentagon-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="m10.205 2.6-6.96 5.238A3 3 0 0 0 2.2 11.176l2.896 8.765A3 3 0 0 0 7.946 22h8.12a3 3 0 0 0 2.841-2.037l2.973-8.764a3 3 0 0 0-1.05-3.37l-7.033-5.237-.091-.061-.018-.01-.106-.07a3 3 0 0 0-3.377.148z"
    />
  </Svg>
);
export default SvgPentagonFilled;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMushroomFilled = ({
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
      d="M15 15v4a3 3 0 0 1-5.995.176L9 19v-4zM4.9 13a1.9 1.9 0 0 1-1.894-1.752L3 11.1C3 6.077 7.027 2 12 2s9 4.077 9 9.1a1.9 1.9 0 0 1-1.752 1.894L19.1 13z"
    />
  </Svg>
);
export default SvgMushroomFilled;

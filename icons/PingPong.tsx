import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPingPong = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12.718 20.713a7.64 7.64 0 0 1-7.48-12.755l.72-.72a7.64 7.64 0 0 1 9.105-1.283L17.45 3.61a2.08 2.08 0 0 1 3.057 2.815l-.116.126-2.346 2.387a7.64 7.64 0 0 1-1.052 8.864" />
    <Path d="M11 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9.3 5.3l9.4 9.4" />
  </Svg>
);
export default SvgPingPong;

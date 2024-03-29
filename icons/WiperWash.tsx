import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWiperWash = ({
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
    <Path d="M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 11l5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0M12 20V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0" />
    <Path d="M12 6a4 4 0 0 0-.4-1.8" />
    <Path d="M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8" />
  </Svg>
);
export default SvgWiperWash;

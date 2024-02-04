import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWallOff = ({
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
    <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361.36-.86.583-1.411.583H6a2 2 0 0 1-2-2V6c0-.55.222-1.047.58-1.409M4 8h4m4 0h8M20 12h-4m-4 0H4M4 16h12M9 4v1M14 8v2M8 12v4M11 16v4M3 3l18 18" />
  </Svg>
);
export default SvgWallOff;

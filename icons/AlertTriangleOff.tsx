import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlertTriangleOff = ({
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
    <Path d="M21.998 17.997a1.9 1.9 0 0 0-.255-.872L13.637 3.591a1.914 1.914 0 0 0-3.274 0l-1.04 1.736M7.83 7.82l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871H20M12 16h.01M3 3l18 18M12 7v1" />
  </Svg>
);
export default SvgAlertTriangleOff;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScaleOutlineOff = ({
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
    <Path d="M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83A3.99 3.99 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.104.447-2.103 1.17-2.827" />
    <Path d="M11.062 7.062Q11.527 7 12 7c1.956 0 3.724.802 5 2.095A143 143 0 0 0 15 11m-3.723.288a3 3 0 0 0-1.315.71L7.006 9.095a7 7 0 0 1 1.142-.942M3 3l18 18" />
  </Svg>
);
export default SvgScaleOutlineOff;

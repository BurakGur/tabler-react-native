import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSolarPanel = ({
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
    <Path d="M4.28 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6A1 1 0 0 0 18.22 6H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 14M4 10h16M10 6l-1 8M14 6l1 8M12 14v4M7 18h10" />
  </Svg>
);
export default SvgSolarPanel;

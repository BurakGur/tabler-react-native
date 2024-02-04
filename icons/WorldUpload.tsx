import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldUpload = ({
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
    className="icon icon-tabler icon-tabler-world-upload"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12" />
    <Path d="M11.578 3a17 17 0 0 0 0 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9M18 21v-7m3 3-3-3-3 3" />
  </Svg>
);
export default SvgWorldUpload;

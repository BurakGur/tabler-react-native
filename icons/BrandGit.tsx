import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGit = ({
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
    className="icon icon-tabler icon-tabler-brand-git"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M15 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 15V9M15 11l-2-2M11 7 9.1 5.1" />
    <Path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0z" />
  </Svg>
);
export default SvgBrandGit;

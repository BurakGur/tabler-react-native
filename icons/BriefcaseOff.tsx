import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBriefcaseOff = ({
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
    className="icon icon-tabler icon-tabler-briefcase-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M8.185 4.158A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2M12 12v.01" />
    <Path d="M3 13a20 20 0 0 0 11.905 1.928m3.263-.763A20 20 0 0 0 21 13M3 3l18 18" />
  </Svg>
);
export default SvgBriefcaseOff;

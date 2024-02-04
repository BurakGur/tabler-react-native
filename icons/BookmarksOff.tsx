import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookmarksOff = ({
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
    className="icon icon-tabler icon-tabler-bookmarks-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5-3-5 3V9a2 2 0 0 1 2-2" />
    <Path d="M9.265 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v10M3 3l18 18" />
  </Svg>
);
export default SvgBookmarksOff;

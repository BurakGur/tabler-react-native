import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVirusSearch = ({
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
    <Path d="M17 12a5 5 0 1 0-5 5M12 7V3M11 3h2M15.536 8.464l2.828-2.828M17.657 4.929l1.414 1.414M17 12h4M21 11v2M12 17v4M13 21h-2M8.465 15.536l-2.829 2.828M6.343 19.071 4.93 17.657M7 12H3M3 13v-2M8.464 8.464 5.636 5.636M4.929 6.343 6.343 4.93M15 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M19.5 19.5 22 22" />
  </Svg>
);
export default SvgVirusSearch;

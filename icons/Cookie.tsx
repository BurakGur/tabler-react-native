import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCookie = ({
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
    <Path d="M8 13v.01M12 17v.01M12 12v.01M16 14v.01M11 8v.01M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053.132a3 3 0 0 1 0 2.296Q19.779 14.328 19.5 15q-.283.684-.66 2.216a3 3 0 0 1-1.624 1.623q-1.572.394-2.216.661-.712.295-1.852 1.024a3 3 0 0 1-2.296 0Q9.649 19.77 9 19.5q-.707-.292-2.216-.66a3 3 0 0 1-1.623-1.624Q4.764 15.639 4.5 15q-.298-.718-1.024-1.852a3 3 0 0 1 0-2.296Q4.195 9.736 4.5 9q.257-.62.66-2.216a3 3 0 0 1 1.624-1.623Q8.331 4.777 9 4.5q.687-.285 1.852-1.024a3 3 0 0 1 2.296 0" />
  </Svg>
);
export default SvgCookie;

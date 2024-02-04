import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandDiscord = ({
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
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    <Path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5-2 5.667-2.167 9.833-1.5 11.5.667 1.333 2 3 3.5 3 .5 0 2-2 2-3" />
    <Path d="M7 16.5c3.5 1 6.5 1 10 0" />
  </Svg>
);
export default SvgBrandDiscord;

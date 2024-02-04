import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropletCheck = ({
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
    <Path d="M18.967 13.594a6.6 6.6 0 0 0-.903-2.717l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.13 7.13 0 0 0 4.04 1.565M15 19l2 2 4-4" />
  </Svg>
);
export default SvgDropletCheck;

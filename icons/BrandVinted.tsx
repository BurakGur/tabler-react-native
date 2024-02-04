import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandVinted = ({
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
    <Path d="M11.028 6c0 7.695-.292 11.728 0 12 2.046-5 4.246-12.642 5.252-14.099.343-.497.768-.93 1.257-1.277.603-.39 1.292-.76 1.463-.575-.07 2.319-4.023 15.822-4.209 16.314a6.14 6.14 0 0 1-3.465 3.386c-3.213.78-3.429-.446-3.836-1.134C6.54 18.512 5.808 6.355 6.045 5c.05-.523.143-1.851 2.491-2 2.359-.354 2.547 1.404 2.492 3" />
  </Svg>
);
export default SvgBrandVinted;

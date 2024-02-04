import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkMinus = ({
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
    <Path d="m9 15 6-6M11 6l.463-.536a5 5 0 1 1 7.071 7.072L18 13M12.603 18.534a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11M16 19h6" />
  </Svg>
);
export default SvgLinkMinus;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeyframes = ({
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
    <Path d="M9.225 18.412A1.6 1.6 0 0 1 8 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.361-5.248A1.6 1.6 0 0 1 8 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 0 1 0 2.328zM17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L17 19" />
    <Path d="m13 5 4.586 5.836a1.844 1.844 0 0 1 0 2.328L13 19" />
  </Svg>
);
export default SvgKeyframes;

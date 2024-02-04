import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpade = ({
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
    <Path d="m12 3 4.919 4.5q.915.88 1.703 1.771a5.53 5.53 0 0 1 .264 6.979c-1.18 1.56-3.338 1.92-4.886.75v1l1 3H9l1-3v-1c-1.54 1.07-3.735.772-4.886-.75a5.53 5.53 0 0 1 .264-6.979A31 31 0 0 1 7.081 7.5 1542 1542 0 0 1 12 3" />
  </Svg>
);
export default SvgSpade;

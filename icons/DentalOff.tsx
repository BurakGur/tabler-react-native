import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDentalOff = ({
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
    <Path d="M19.277 15.281C19.74 13.531 20 11.437 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5C10.926 4.914 9.417 4 8 4M5.157 5.153C4.45 5.937 4 7.17 4 9c0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236q.597-.758 1.262-2.801c.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5q.665 2.043 1.262 2.8c.597.759 2 .993 2.567.237q.458-.603.852-1.353M12 5.5 15 7M3 3l18 18" />
  </Svg>
);
export default SvgDentalOff;

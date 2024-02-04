import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiscOff = ({
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
    <Path d="M20.044 16.04A9 9 0 0 0 7.962 3.955M5.629 5.643A9 9 0 0 0 12 21c2.491 0 4.73-1 6.36-2.631" />
    <Path d="M11.298 11.288a1 1 0 1 0 1.402 1.427M7 12c0-1.38.559-2.629 1.462-3.534m2.607-1.38Q11.522 7.001 12 7M12 17a4.99 4.99 0 0 0 3.551-1.48m1.362-2.587q.086-.454.087-.933M3 3l18 18" />
  </Svg>
);
export default SvgDiscOff;

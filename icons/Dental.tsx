import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDental = ({
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
    <Path d="M12 5.5C10.926 4.914 9.417 4 8 4 5.9 4 4 5.247 4 9c0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236q.597-.758 1.262-2.801c.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5q.665 2.043 1.262 2.8c.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5M12 5.5 15 7" />
  </Svg>
);
export default SvgDental;

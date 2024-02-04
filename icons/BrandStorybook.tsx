import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandStorybook = ({
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
    <Path d="m5 4 .5 16.5L19 21V3z" />
    <Path d="M9 15c.6 1.5 1.639 2 3.283 2H12c1.8 0 3-.974 3-2.435 0-1.194-.831-1.799-2.147-2.333l-1.975-.802C9.728 10.963 9 10.008 9 8.963c0-.97.899-1.786 2.087-1.893l.613-.055c1.528-.138 3 .762 3.3 1.985M16 3.5v1" />
  </Svg>
);
export default SvgBrandStorybook;

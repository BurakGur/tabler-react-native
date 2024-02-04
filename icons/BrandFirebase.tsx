import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandFirebase = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-brand-firebase"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m4.53 17.05 6.15-11.72h-.02c.38-.74 1.28-1.02 2.01-.63.26.14.48.36.62.62l1.06 2.01" />
    <Path d="M15.47 6.45c.58-.59 1.53-.59 2.11-.01.22.22.36.5.41.81l1.5 9.11c.1.62-.2 1.24-.76 1.54l-6.07 2.9c-.46.25-1.01.26-1.46 0l-6.02-2.92c-.55-.31-.85-.92-.75-1.54L6.39 4.3c.12-.82.89-1.38 1.7-1.25.46.07.87.36 1.09.77l1.24 1.76M4.57 17.18 15.5 6.5" />
  </Svg>
);
export default SvgBrandFirebase;

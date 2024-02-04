import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpiral = ({
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
    className="icon icon-tabler icon-tabler-spiral"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 12.057a1.9 1.9 0 0 0 .614.743c1.06.713 2.472.112 3.043-.919.839-1.513-.022-3.368-1.525-4.08-2-.95-4.371.154-5.24 2.086-1.095 2.432.29 5.248 2.71 6.246 2.931 1.208 6.283-.418 7.438-3.255 1.36-3.343-.557-7.134-3.896-8.41-3.855-1.474-8.2.68-9.636 4.422-1.63 4.253.823 9.024 5.082 10.576 4.778 1.74 10.118-.941 11.833-5.59A9.4 9.4 0 0 0 21 11.063" />
  </Svg>
);
export default SvgSpiral;

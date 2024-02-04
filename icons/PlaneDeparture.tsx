import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaneDeparture = ({
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
    className="icon icon-tabler icon-tabler-plane-departure"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m14.639 10.258 4.83-1.294a2 2 0 1 1 1.035 3.863L6.015 16.71l-4.45-5.02 2.897-.776 2.45 1.414 2.897-.776-3.743-6.244 2.898-.777zM3 21h18" />
  </Svg>
);
export default SvgPlaneDeparture;

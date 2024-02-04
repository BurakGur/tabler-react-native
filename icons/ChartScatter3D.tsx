import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartScatter3D = ({
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
    className="icon icon-tabler icon-tabler-chart-scatter-3d"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m3 20 9-7M12 3v10l9 7M17 12v.015M17 4.015v.015M21 8.015v.015M12 19.015v.015M3 12.015v.015M7 8.015v.015M3 4.015v.015" />
  </Svg>
);
export default SvgChartScatter3D;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTopologyBus = ({
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
    className="icon icon-tabler icon-tabler-topology-bus"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M2 16h20M4 12v4M12 12v4M20 12v4" />
  </Svg>
);
export default SvgTopologyBus;

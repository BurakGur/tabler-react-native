import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFirstAidKitOff = ({
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
    className="icon icon-tabler icon-tabler-first-aid-kit-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.595 4.577A2 2 0 0 1 10 4h4a2 2 0 0 1 2 2v2M12 8h6a2 2 0 0 1 2 2v6m-.576 3.405A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2M10 14h4M12 12v4M3 3l18 18" />
  </Svg>
);
export default SvgFirstAidKitOff;

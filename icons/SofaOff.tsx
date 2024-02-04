import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofaOff = ({
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
    className="icon icon-tabler icon-tabler-sofa-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18 14v-1a2 2 0 1 1 4 0v5m-3 1H3a1 1 0 0 1-1-1v-5a2 2 0 1 1 4 0v1h8" />
    <Path d="M4 11V8c0-1.082.573-2.03 1.432-2.558M9 5h8a3 3 0 0 1 3 3v3M12 5v3m0 4v2M3 3l18 18" />
  </Svg>
);
export default SvgSofaOff;

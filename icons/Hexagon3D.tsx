import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHexagon3D = ({
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
    className="icon icon-tabler icon-tabler-hexagon-3d"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19 6.844a2.01 2.01 0 0 1 1 1.752v6.555c0 .728-.394 1.399-1.03 1.753l-6 3.844a2 2 0 0 1-1.942 0l-6-3.844a2.01 2.01 0 0 1-1.029-1.752V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03zM12 16.5V21M4.5 7.5 8 10M16 10l4-2.5" />
    <Path d="M12 7.5V12l-4 2M12 12l4 2" />
    <Path d="m12 16.5 4-2.5v-4l-4-2.5L8 10v4z" />
  </Svg>
);
export default SvgHexagon3D;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAB2 = ({
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
    className="icon icon-tabler icon-tabler-a-b-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M16 21h3c.81 0 1.48-.67 1.48-1.48l.02-.02c0-.82-.69-1.5-1.5-1.5h-3zM16 15h2.5c.84-.01 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H16zM4 9V5c0-1.036.895-2 2-2s2 .964 2 2v4M2.99 11.98a9 9 0 0 0 9 9m9-9a9 9 0 0 0-9-9M8 7H4" />
  </Svg>
);
export default SvgAB2;

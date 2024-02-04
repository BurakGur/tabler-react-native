import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgABOff = ({
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
    className="icon icon-tabler icon-tabler-a-b-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3M12 12v6M12 6v2M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82M16 12V8M3 3l18 18" />
  </Svg>
);
export default SvgABOff;

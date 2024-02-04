import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMarqueeOff = ({
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
    className="icon icon-tabler icon-tabler-marquee-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 6c0-.556.227-1.059.593-1.421M9 4h1.5M13.5 4H15M18 4a2 2 0 0 1 2 2M20 9v1.5M20 13.5V15M19.402 19.426A2 2 0 0 1 18 20M15 20h-1.5M10.5 20H9M6 20a2 2 0 0 1-2-2M4 15v-1.5M4 10.5V9M3 3l18 18" />
  </Svg>
);
export default SvgMarqueeOff;

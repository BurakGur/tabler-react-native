import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSticker2 = ({
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
    className="icon icon-tabler icon-tabler-sticker-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6 4h12a2 2 0 0 1 2 2v7h-5a2 2 0 0 0-2 2v5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
    <Path d="M20 13v.172a2 2 0 0 1-.586 1.414l-4.828 4.828a2 2 0 0 1-1.414.586H13" />
  </Svg>
);
export default SvgSticker2;

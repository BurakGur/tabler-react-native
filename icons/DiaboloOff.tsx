import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiaboloOff = ({
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
    className="icon icon-tabler icon-tabler-diabolo-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.727 4.749C4.26 5.129 4 5.553 4 6c0 1.217 1.933 2.265 4.71 2.735m4.257.243C16.929 8.8 20 7.534 20 6c0-1.657-3.582-3-8-3-1.66 0-3.202.19-4.48.514" />
    <Path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3 3.218 0 5.992-.712 7.262-1.74m-.211-4.227L18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
    <Path d="M6 12c0 1.105 2.686 2 6 2 .656 0 1.288-.035 1.879-.1m3.198-.834c.585-.308.923-.674.923-1.066M3 3l18 18" />
  </Svg>
);
export default SvgDiaboloOff;

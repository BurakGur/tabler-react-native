import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandKakoTalk = ({
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
    className="icon icon-tabler icon-tabler-brand-kako-talk"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 8v7M14 10l-2 2.5 2 2.5" />
    <Path d="M12 4c4.97 0 9 3.358 9 7.5S16.97 19 12 19c-.67 0-1.323-.061-1.95-.177L7 21l.592-2.962C4.851 16.754 3 14.308 3 11.5 3 7.358 7.03 4 12 4" />
  </Svg>
);
export default SvgBrandKakoTalk;

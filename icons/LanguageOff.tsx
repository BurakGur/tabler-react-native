import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLanguageOff = ({
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
    className="icon icon-tabler icon-tabler-language-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 5h1m4 0h2M9 3v2m-.508 3.517C7.678 11.172 5.972 13 4 13" />
    <Path d="M5 9c0 2.144 2.952 3.908 6.7 4M12 20l2.463-5.541m1.228-2.764L16 11l.8 1.8M18 18h-5.1M3 3l18 18" />
  </Svg>
);
export default SvgLanguageOff;

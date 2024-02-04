import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGoogleHome = ({
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
    className="icon icon-tabler icon-tabler-brand-google-home"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19.072 21H4.928A1.93 1.93 0 0 1 3 19.072v-6.857c0-.512.203-1 .566-1.365l7.07-7.063a1.93 1.93 0 0 1 2.727 0l7.071 7.063c.363.362.566.853.566 1.365v6.857A1.93 1.93 0 0 1 19.072 21" />
    <Path d="M7 13v4h10v-4l-5-5M14.8 5.2 3 17M7 17v4M17 17v4" />
  </Svg>
);
export default SvgBrandGoogleHome;

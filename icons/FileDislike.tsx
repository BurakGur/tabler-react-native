import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileDislike = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
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
    className=""
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM6 15a1 1 0 0 1 1-1h3.756a1 1 0 0 1 .958.713l1.2 3c.09.303.133.63-.056.884-.188.254-.542.403-.858.403h-2v2.467a1.1 1.1 0 0 1-2.015.61L6 19zM14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-2.5" />
  </Svg>
);
export default SvgFileDislike;

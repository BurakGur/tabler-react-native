import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandPhp = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M2 12a10 9 0 1 0 20 0 10 9 0 1 0-20 0" />
    <Path d="m5.5 15 .395-1.974L6.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H6M15.5 15l.395-1.974L16.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H16M12 7.5 11 13M11.6 10H14l-.5 3" />
  </Svg>
);
export default SvgBrandPhp;

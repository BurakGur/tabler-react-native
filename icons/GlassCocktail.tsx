import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlassCocktail = ({
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
    <Path d="M8 21h8M12 15v6M5 5a7 2 0 1 0 14 0A7 2 0 1 0 5 5" />
    <Path d="M5 5v.388c0 .432.126.853.362 1.206l5 7.509c.633.951 1.88 1.183 2.785.517.191-.141.358-.316.491-.517l5-7.509c.236-.353.362-.774.362-1.206V5" />
  </Svg>
);
export default SvgGlassCocktail;

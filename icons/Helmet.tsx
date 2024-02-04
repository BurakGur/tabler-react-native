import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelmet = ({
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
    className="icon icon-tabler icon-tabler-helmet"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 4a9 9 0 0 1 5.656 16H6.344A9 9 0 0 1 12 4" />
    <Path d="M20 9h-8.8a1 1 0 0 0-.968 1.246q.76 3 3.268 4.254 3 1.5 7 1.5" />
  </Svg>
);
export default SvgHelmet;

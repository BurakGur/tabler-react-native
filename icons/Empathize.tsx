import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEmpathize = ({
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
    className="icon icon-tabler icon-tabler-empathize"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9.5 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M12 21.368l5.095-5.096a3.088 3.088 0 1 0-4.367-4.367l-.728.727-.728-.727a3.088 3.088 0 1 0-4.367 4.367z" />
  </Svg>
);
export default SvgEmpathize;

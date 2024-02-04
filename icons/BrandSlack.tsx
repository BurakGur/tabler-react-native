import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSlack = ({
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
    className="icon icon-tabler icon-tabler-brand-slack"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6M12 12v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6M12 12H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6" />
  </Svg>
);
export default SvgBrandSlack;

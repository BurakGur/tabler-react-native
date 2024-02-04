import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMichelinBibGourmand = ({
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
    className="icon icon-tabler icon-tabler-michelin-bib-gourmand"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.97 20c-2.395-1.947-4.763-5.245-1.005-8-.52-4 3.442-7.5 5.524-7.5.347-1 1.499-1.5 2.54-1.5s2.135.5 2.482 1.5c2.082 0 6.044 3.5 5.524 7.5 3.758 2.755 1.39 6.053-1.005 8" />
    <Path d="M8 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0M14 11a1 2 0 1 0 2 0 1 2 0 1 0-2 0M8 17.085c3.5 2.712 6.5 2.712 9-1.085" />
    <Path d="M13 18.5c.815-2.337 1.881-1.472 2-.55" />
  </Svg>
);
export default SvgMichelinBibGourmand;

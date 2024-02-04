import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBaguette = ({
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
    className="icon icon-tabler icon-tabler-baguette"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m5.628 11.283 5.644-5.637c2.665-2.663 5.924-3.747 8.663-1.205l.188.181a2.987 2.987 0 0 1 0 4.228L8.836 20.124a3 3 0 0 1-4.089.135l-.143-.135C1.876 17.4 2.9 14.007 5.628 11.283M9.5 7.5 11 11M6.5 10.5 8 14M12.5 4.5 14 8" />
  </Svg>
);
export default SvgBaguette;

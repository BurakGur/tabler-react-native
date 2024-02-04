import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVaccineBottle = ({
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
    className="icon icon-tabler icon-tabler-vaccine-bottle"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM10 6v.98c0 .877-.634 1.626-1.5 1.77S7 9.643 7 10.52V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6M7 12h10M7 18h10M11 15h2" />
  </Svg>
);
export default SvgVaccineBottle;

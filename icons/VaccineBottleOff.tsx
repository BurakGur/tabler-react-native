import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVaccineBottleOff = ({
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
    <Path d="M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4M8.7 8.705a2 2 0 0 1-.2.045c-.866.144-1.5.893-1.5 1.77V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2m0-4v-2.48c0-.877-.634-1.626-1.5-1.77A1.795 1.795 0 0 1 14 6.98V6M7 12h5m4 0h1M7 18h10M11 15h2M3 3l18 18" />
  </Svg>
);
export default SvgVaccineBottleOff;

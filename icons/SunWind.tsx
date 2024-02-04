import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunWind = ({
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
    className="icon icon-tabler icon-tabler-sun-wind"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M14.468 10a4 4 0 1 0-5.466 5.46M2 12h1M11 3v1M11 20v1M4.6 5.6l.7.7M17.4 5.6l-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 1 0 0-4M12 16h5.9670000000000005A2 2 0 0 1 20 18a2 2 0 0 1-2 2h-.286" />
  </Svg>
);
export default SvgSunWind;

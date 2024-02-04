import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunElectricity = ({
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
    className="icon icon-tabler icon-tabler-sun-electricity"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 12a4 4 0 0 0 4 4m0-8a4 4 0 0 0-4 4M3 12h1M12 3v1M12 20v1M5.6 5.6l.7.7M6.3 17.7l-.7.7M20 7l-3 5h4l-3 5" />
  </Svg>
);
export default SvgSunElectricity;

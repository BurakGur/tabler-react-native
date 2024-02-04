import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunHigh = ({
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
    <Path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656M6.343 17.657l-1.414 1.414M6.343 6.343 4.929 4.929M17.657 6.343l1.414-1.414M17.657 17.657l1.414 1.414M4 12H2M12 4V2M20 12h2M12 20v2" />
  </Svg>
);
export default SvgSunHigh;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceTabletFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M18 2a2 2 0 0 1 1.995 1.85L20 4v16a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zm-6 13a2 2 0 0 0-1.977 1.697l-.018.154L10 17l.005.15A2 2 0 1 0 12 15"
    />
  </Svg>
);
export default SvgDeviceTabletFilled;

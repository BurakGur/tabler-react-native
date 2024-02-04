import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileSettings = ({
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
    className="icon icon-tabler icon-tabler-file-settings"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 10.5V12M12 16v1.5M15.031 12.25l-1.299.75M10.268 15l-1.3.75M15 15.803l-1.285-.773M10.285 12.97 9 12.197M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
  </Svg>
);
export default SvgFileSettings;

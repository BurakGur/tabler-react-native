import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabaseOff = ({
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
    className="icon icon-tabler icon-tabler-database-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12.983 8.978C16.938 8.796 20 7.532 20 6c0-1.657-3.582-3-8-3-1.661 0-3.204.19-4.483.515M4.734 4.743C4.263 5.125 4 5.551 4 6c0 1.22 1.944 2.271 4.734 2.74" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3 .986 0 1.93-.067 2.802-.19m3.187-.82C19.24 13.46 20 12.762 20 12V6" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3 3.217 0 5.991-.712 7.261-1.74M20 16v-4M3 3l18 18" />
  </Svg>
);
export default SvgDatabaseOff;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSnowflakeOff = ({
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
    className="icon icon-tabler icon-tabler-snowflake-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m10 4 2 1 2-1M12 2v6m1.196 1.186L15 10.22M17.928 6.268l.134 2.232 1.866 1.232" />
    <Path d="m20.66 7-5.629 3.25L15 11M19.928 14.268l-1.015.67M14.212 14.226l-2.171 1.262M14 20l-2-1-2 1" />
    <Path d="M12 22v-6.5l-3-1.72M6.072 17.732 5.938 15.5l-1.866-1.232" />
    <Path d="m3.34 17 5.629-3.25-.01-3.458M4.072 9.732 5.938 8.5l.134-2.232" />
    <Path d="m3.34 7 5.629 3.25.802-.466M3 3l18 18" />
  </Svg>
);
export default SvgSnowflakeOff;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgProgressHelp = ({
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
    <Path d="M12 16v.01M12 13a2 2 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483M10 20.777a9 9 0 0 1-2.48-.969" />
    <Path d="M14 3.223a9.003 9.003 0 0 1 0 17.554M4.579 17.093a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305M6.907 4.579A9 9 0 0 1 10 3.223" />
  </Svg>
);
export default SvgProgressHelp;

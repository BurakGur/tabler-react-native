import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartBubbleFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M6 12a4 4 0 1 1-3.995 4.2L2 16l.005-.2A4 4 0 0 1 6 12M16 16a3 3 0 1 1-2.995 3.176L13 19l.005-.176A3 3 0 0 1 16 16M14.5 2a5.5 5.5 0 1 1-5.496 5.721L9 7.5l.004-.221A5.5 5.5 0 0 1 14.5 2"
    />
  </Svg>
);
export default SvgChartBubbleFilled;

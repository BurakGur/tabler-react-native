import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartCandleFilled = ({
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
    className="icon icon-tabler icon-tabler-chart-candle-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M6 3a1 1 0 0 1 .993.883L7 4v1a2 2 0 0 1 1.995 1.85L9 7v3a2 2 0 0 1-1.85 1.995L7 12v8a1 1 0 0 1-1.993.117L5 20v-8a2 2 0 0 1-1.995-1.85L3 10V7a2 2 0 0 1 1.85-1.995L5 5V4a1 1 0 0 1 1-1M12 3a1 1 0 0 1 .993.883L13 4v9a2 2 0 0 1 1.995 1.85L15 15v3a2 2 0 0 1-1.85 1.995L13 20a1 1 0 0 1-1.993.117L11 20l-.15-.005a2 2 0 0 1-1.844-1.838L9 18v-3a2 2 0 0 1 1.85-1.995L11 13V4a1 1 0 0 1 1-1M18 3a1 1 0 0 1 .993.883L19 4a2 2 0 0 1 1.995 1.85L21 6v4a2 2 0 0 1-1.85 1.995L19 12v8a1 1 0 0 1-1.993.117L17 20v-8a2 2 0 0 1-1.995-1.85L15 10V6a2 2 0 0 1 1.85-1.995L17 4a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgChartCandleFilled;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdjustmentsFilled = ({
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
    className="icon icon-tabler icon-tabler-adjustments-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M6 3a1 1 0 0 1 .993.883L7 4v3.171a3.001 3.001 0 0 1 0 5.658V20a1 1 0 0 1-1.993.117L5 20v-7.17a3 3 0 0 1-1.995-2.654L3 10l.005-.176A3 3 0 0 1 5 7.17V4a1 1 0 0 1 1-1M12 3a1 1 0 0 1 .993.883L13 4v9.171a3.001 3.001 0 0 1 0 5.658V20a1 1 0 0 1-1.993.117L11 20v-1.17a3 3 0 0 1-1.995-2.654L9 16l.005-.176A3 3 0 0 1 11 13.17V4a1 1 0 0 1 1-1M18 3a1 1 0 0 1 .993.883L19 4v.171a3.001 3.001 0 0 1 0 5.658V20a1 1 0 0 1-1.993.117L17 20V9.83a3 3 0 0 1-1.995-2.654L15 7l.005-.176A3 3 0 0 1 17 4.17V4a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgAdjustmentsFilled;

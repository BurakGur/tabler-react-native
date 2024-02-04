import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBattery2Filled = ({
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
    className="icon icon-tabler icon-tabler-battery-2-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M17 6a3 3 0 0 1 2.995 2.824L20 9v.086l.052.019a1.5 1.5 0 0 1 .941 1.25L21 10.5v3a1.5 1.5 0 0 1-.948 1.395l-.052.018V15a3 3 0 0 1-2.824 2.995L17 18H6a3 3 0 0 1-2.995-2.824L3 15V9a3 3 0 0 1 2.824-2.995L6 6zM7 9a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 8 14v-4l-.007-.117A1 1 0 0 0 7 9m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 11 14v-4l-.007-.117A1 1 0 0 0 10 9"
    />
  </Svg>
);
export default SvgBattery2Filled;

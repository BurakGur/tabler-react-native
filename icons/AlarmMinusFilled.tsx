import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmMinusFilled = ({
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
      d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M14 12h-4l-.117.007A1 1 0 0 0 10 14h4l.117-.007A1 1 0 0 0 14 12"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M6.412 3.191A1 1 0 0 1 7.685 4.73l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08 2.75-2zM16.191 3.412a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.106-.067-2.75-2a1 1 0 0 1-.22-1.397z"
    />
  </Svg>
);
export default SvgAlarmMinusFilled;

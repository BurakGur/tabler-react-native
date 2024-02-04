import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrightnessDownFilled = ({
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
      d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8M12 4a1 1 0 0 1 .993.883L13 5.01a1 1 0 0 1-1.993.117L11 5a1 1 0 0 1 1-1M17 6a1 1 0 0 1 .993.883L18 7.01a1 1 0 0 1-1.993.117L16 7a1 1 0 0 1 1-1M19 11a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L18 12a1 1 0 0 1 1-1M17 16a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L16 17a1 1 0 0 1 1-1M12 18a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L11 19a1 1 0 0 1 1-1M7 16a1 1 0 0 1 .993.883L8 17.01a1 1 0 0 1-1.993.117L6 17a1 1 0 0 1 1-1M5 11a1 1 0 0 1 .993.883L6 12.01a1 1 0 0 1-1.993.117L4 12a1 1 0 0 1 1-1M7 6a1 1 0 0 1 .993.883L8 7.01a1 1 0 0 1-1.993.117L6 7a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgBrightnessDownFilled;

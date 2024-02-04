import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCaptureFilled = ({
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
    className="icon icon-tabler icon-tabler-capture-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M8 3a1 1 0 0 1 .117 1.993L8 5H6a1 1 0 0 0-.993.883L5 6v2a1 1 0 0 1-1.993.117L3 8V6a3 3 0 0 1 2.824-2.995L6 3zM4 15a1 1 0 0 1 .993.883L5 16v2a1 1 0 0 0 .883.993L6 19h2a1 1 0 0 1 .117 1.993L8 21H6a3 3 0 0 1-2.995-2.824L3 18v-2a1 1 0 0 1 1-1M18 3a3 3 0 0 1 2.995 2.824L21 6v2a1 1 0 0 1-1.993.117L19 8V6a1 1 0 0 0-.883-.993L18 5h-2a1 1 0 0 1-.117-1.993L16 3zM20 15a1 1 0 0 1 .993.883L21 16v2a3 3 0 0 1-2.824 2.995L18 21h-2a1 1 0 0 1-.117-1.993L16 19h2a1 1 0 0 0 .993-.883L19 18v-2a1 1 0 0 1 1-1M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8"
    />
  </Svg>
);
export default SvgCaptureFilled;

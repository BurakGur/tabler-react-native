import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoxAlignBottomLeftFilled = ({
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
      d="M10 12H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2M4 8a1 1 0 0 1 .993.883L5 9.01a1 1 0 0 1-1.993.117L3 9a1 1 0 0 1 1-1M4 3a1 1 0 0 1 .993.883L5 4.01a1 1 0 0 1-1.993.117L3 4a1 1 0 0 1 1-1M9 3a1 1 0 0 1 .993.883L10 4.01a1 1 0 0 1-1.993.117L8 4a1 1 0 0 1 1-1M15 3a1 1 0 0 1 .993.883L16 4.01a1 1 0 0 1-1.993.117L14 4a1 1 0 0 1 1-1M15 19a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L14 20a1 1 0 0 1 1-1M20 3a1 1 0 0 1 .993.883L21 4.01a1 1 0 0 1-1.993.117L19 4a1 1 0 0 1 1-1M20 8a1 1 0 0 1 .993.883L21 9.01a1 1 0 0 1-1.993.117L19 9a1 1 0 0 1 1-1M20 14a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 15a1 1 0 0 1 1-1M20 19a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L19 20a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgBoxAlignBottomLeftFilled;

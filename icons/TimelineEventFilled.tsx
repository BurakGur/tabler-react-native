import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTimelineEventFilled = ({
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
      d="M12 17c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-5.171a3.001 3.001 0 0 1-5.658 0H4a1 1 0 0 1 0-2h5.17A3 3 0 0 1 12 17M17 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.586l-1.707 1.707a1 1 0 0 1-1.32.083l-.094-.083L9.585 14H7a2 2 0 0 1-1.995-1.85L5 12V4a2 2 0 0 1 2-2z"
    />
  </Svg>
);
export default SvgTimelineEventFilled;

import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChessQueenFilled = ({
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
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M12 2a2 2 0 0 1 1.572 3.236l.793 1.983 1.702-1.702A2.003 2.003 0 0 1 18 3a2 2 0 0 1 .674 3.884l-1.69 9.295a1 1 0 0 1-.865.814L16 17H8a1 1 0 0 1-.956-.705l-.028-.116-1.69-9.295a2 2 0 1 1 2.607-1.367l1.701 1.702.794-1.983A2 2 0 0 1 12 2M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"
    />
  </Svg>
);
export default SvgChessQueenFilled;

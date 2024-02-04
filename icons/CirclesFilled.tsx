import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCirclesFilled = ({
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
      d="M6.5 12a5 5 0 1 1-4.995 5.217L1.5 17l.005-.217A5 5 0 0 1 6.5 12M17.5 12a5 5 0 1 1-4.995 5.217L12.5 17l.005-.217A5 5 0 0 1 17.5 12M12 2a5 5 0 1 1-4.995 5.217L7 7l.005-.217A5 5 0 0 1 12 2"
    />
  </Svg>
);
export default SvgCirclesFilled;

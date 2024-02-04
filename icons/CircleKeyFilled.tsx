import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircleKeyFilled = ({
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
      d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0C2 6.477 6.477 2 12 2m2 5a3 3 0 0 0-2.98 2.65l-.015.174L11 10l.005.176q.03.48.197.908l.09.209-3.5 3.5-.082.094a1 1 0 0 0 0 1.226l.083.094 1.5 1.5.094.083a1 1 0 0 0 1.226 0l.094-.083.083-.094a1 1 0 0 0 0-1.226l-.083-.094-.792-.793.585-.585.793.792.094.083a1 1 0 0 0 1.403-1.403l-.083-.094-.792-.793.792-.792A3 3 0 1 0 14 7m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </Svg>
);
export default SvgCircleKeyFilled;

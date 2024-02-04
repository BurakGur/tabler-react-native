import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRecycleOff = ({
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
    <Path d="m12 17-2 2 2 2m-2-2h9m1.896-2.071a2 2 0 0 0-.146-.679l-.55-1M8.536 11l-.732-2.732L5.072 9m2.732-.732-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141.024M15.464 11l2.732.732L18.928 9m-.732 2.732-4.5-7.794a2 2 0 0 0-3.256-.14l-.591.976M3 3l18 18" />
  </Svg>
);
export default SvgRecycleOff;

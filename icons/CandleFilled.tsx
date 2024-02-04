import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCandleFilled = ({
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
      d="M14 10h-4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2M11.254 2.334l-1.55 1.737C8.662 5.348 8.806 7.168 10 8.237a3 3 0 0 0 4.196-4.28l-1.452-1.624a1 1 0 0 0-1.491.001z"
    />
  </Svg>
);
export default SvgCandleFilled;

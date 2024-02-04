import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandXFilled = ({
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
      d="M8.267 3a1 1 0 0 1 .73.317l.076.092 4.274 5.828 5.946-5.944a1 1 0 0 1 1.497 1.32l-.083.094-6.163 6.162 6.262 8.54a1 1 0 0 1-.697 1.585L20 21h-4.267a1 1 0 0 1-.73-.317l-.076-.092-4.276-5.829-5.944 5.945a1 1 0 0 1-1.497-1.32l.083-.094 6.161-6.163-6.26-8.539a1 1 0 0 1 .697-1.585L4 3z"
    />
  </Svg>
);
export default SvgBrandXFilled;

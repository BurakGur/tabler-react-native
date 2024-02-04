import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCodesandbox = ({
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
    className="icon icon-tabler icon-tabler-brand-codesandbox"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20 7.5v9l-4 2.25L12 21l-4-2.25-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25 4-2.25M12 12v9M12 12 8 9.75 4 7.5" />
    <Path d="m20 12-4 2v4.75M4 12l4 2v4.75M8 5.25l4 2.25 4-2.25" />
  </Svg>
);
export default SvgBrandCodesandbox;

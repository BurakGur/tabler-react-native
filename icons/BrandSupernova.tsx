import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSupernova = ({
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
    <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M15 15h.5c3.038 0 5.5-1.343 5.5-3s-2.462-3-5.5-3c-1.836 0-3.462.49-4.46 1.245M9 9h-.5C5.462 9 3 10.343 3 12s2.462 3 5.5 3c1.844 0 3.476-.495 4.474-1.255" />
    <Path d="M15 9v-.5C15 5.462 13.657 3 12 3S9 5.462 9 8.5c0 1.833.49 3.457 1.241 4.456M9 15v.5c0 3.038 1.343 5.5 3 5.5s3-2.462 3-5.5c0-1.842-.494-3.472-1.252-4.47" />
  </Svg>
);
export default SvgBrandSupernova;

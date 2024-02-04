import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandPeanut = ({
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
    <Path d="m15 16.25-.816-.36-.462-.196c-1.444-.592-2-.593-3.447 0l-.462.195-.817.359a4.5 4.5 0 1 1 0-8.49v0l1.054.462.434.178c1.292.507 1.863.48 3.237-.082l.462-.195.817-.359a4.5 4.5 0 1 1 0 8.49" />
  </Svg>
);
export default SvgBrandPeanut;

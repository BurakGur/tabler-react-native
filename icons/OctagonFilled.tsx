import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOctagonFilled = ({
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
      d="M15.3 2H8.7c-.562 0-1.016.201-1.407.593l-4.7 4.7A1.9 1.9 0 0 0 2 8.7v6.6c0 .562.201 1.016.593 1.407l4.7 4.7c.391.392.845.593 1.407.593h6.6c.562 0 1.016-.201 1.407-.593l4.7-4.7c.392-.391.593-.845.593-1.407V8.7c0-.562-.201-1.016-.593-1.407l-4.7-4.7A1.9 1.9 0 0 0 15.3 2"
    />
  </Svg>
);
export default SvgOctagonFilled;

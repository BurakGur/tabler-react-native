import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFunctionFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M17.333 3A3.667 3.667 0 0 1 21 6.667v10.666A3.667 3.667 0 0 1 17.333 21H6.667A3.667 3.667 0 0 1 3 17.333V6.667A3.667 3.667 0 0 1 6.667 3zM13.75 6a2.38 2.38 0 0 0-2.37 2.145L11.095 11H9l-.117.007A1 1 0 0 0 9 13h1.894l-.265 2.656-.014.071a.38.38 0 0 1-.365.273.25.25 0 0 1-.25-.25v-.25l-.007-.117A1 1 0 0 0 8 15.5v.25l.005.154A2.25 2.25 0 0 0 10.25 18a2.38 2.38 0 0 0 2.37-2.145L12.904 13H15l.117-.007A1 1 0 0 0 15 11h-1.895l.266-2.656.014-.071A.38.38 0 0 1 13.75 8a.25.25 0 0 1 .25.25v.25l.007.117A1 1 0 0 0 16 8.5v-.25l-.005-.154A2.25 2.25 0 0 0 13.75 6"
    />
  </Svg>
);
export default SvgFunctionFilled;

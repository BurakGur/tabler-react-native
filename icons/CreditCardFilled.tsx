import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCreditCardFilled = ({
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
      d="M22 10v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6zM7.01 14H7a1 1 0 1 0 .01 2 1 1 0 0 0 0-2M13 14h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m5-10a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4z"
    />
  </Svg>
);
export default SvgCreditCardFilled;

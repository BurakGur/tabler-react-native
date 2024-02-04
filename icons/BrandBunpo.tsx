import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBunpo = ({
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
    <Path d="M3.9 7.205a17.8 17.8 0 0 0 4.008 2.753 7.9 7.9 0 0 0 4.57.567c1.5-.33 2.907-1 4.121-1.956a12.1 12.1 0 0 0 2.892-2.903c.603-.94.745-1.766.484-2.231s-.927-.568-1.72-.257a7.6 7.6 0 0 0-2.608 2.034 18.4 18.4 0 0 0-2.588 3.884 35 35 0 0 0-2.093 5.073 13 13 0 0 0-.677 3.515c-.07.752.07 1.51.405 2.184.323.562 1.06 1.132 2.343 1.132 3.474 0 5.093-3.53 5.463-5.62.24-1.365-.085-3.197-1.182-4.01" />
  </Svg>
);
export default SvgBrandBunpo;

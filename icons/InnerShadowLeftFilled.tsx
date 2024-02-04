import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInnerShadowLeftFilled = ({
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
      d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142M8.464 7.05a1 1 0 0 0-1.414 0 7 7 0 0 0 0 9.9 1 1 0 1 0 1.414-1.414 5 5 0 0 1 0-7.072 1 1 0 0 0 0-1.414"
    />
  </Svg>
);
export default SvgInnerShadowLeftFilled;

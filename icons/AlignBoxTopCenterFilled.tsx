import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignBoxTopCenterFilled = ({
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
    className="icon icon-tabler icon-tabler-align-box-top-center-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM12 5a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 13 12V6l-.007-.117A1 1 0 0 0 12 5m3 0a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 16 10V6l-.007-.117A1 1 0 0 0 15 5M9 5a1 1 0 0 0-1 1v2l.007.117A1 1 0 0 0 10 8V6l-.007-.117A1 1 0 0 0 9 5"
    />
  </Svg>
);
export default SvgAlignBoxTopCenterFilled;

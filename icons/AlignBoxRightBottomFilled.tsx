import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlignBoxRightBottomFilled = ({
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
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM18 17h-2l-.117.007A1 1 0 0 0 16 19h2l.117-.007A1 1 0 0 0 18 17m0-3h-6l-.117.007A1 1 0 0 0 12 16h6l.117-.007A1 1 0 0 0 18 14m0-3h-4l-.117.007A1 1 0 0 0 14 13h4l.117-.007A1 1 0 0 0 18 11"
    />
  </Svg>
);
export default SvgAlignBoxRightBottomFilled;

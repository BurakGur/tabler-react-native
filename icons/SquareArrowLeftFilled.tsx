import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareArrowLeftFilled = ({
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
    className="icon icon-tabler icon-tabler-square-arrow-left-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6.293 5.293a1 1 0 0 0-1.414 0l-4 4-.083.094-.064.092-.052.098-.044.11-.03.112-.017.126L7 12l.004.09.007.058.025.118.035.105.054.113.071.111q.044.06.097.112l4 4 .094.083a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32L10.415 13H16l.117-.007A1 1 0 0 0 16 11h-5.585l2.292-2.293.083-.094a1 1 0 0 0-.083-1.32"
    />
  </Svg>
);
export default SvgSquareArrowLeftFilled;

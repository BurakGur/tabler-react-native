import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoinRupeeFilled = ({
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
    className="icon icon-tabler icon-tabler-coin-rupee-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M15 7H9c-1.287 0-1.332 1.864-.133 1.993L9 9h1a2 2 0 0 1 1.732 1H9a1 1 0 0 0 0 2l2.732.001A2 2 0 0 1 10 13H9c-.89 0-1.337 1.077-.707 1.707l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32l-1.484-1.485.113-.037a4.01 4.01 0 0 0 2.538-2.77L15 12a1 1 0 0 0 0-2h-1.126a4 4 0 0 0-.33-.855L13.465 9H15a1 1 0 0 0 1-1l-.007-.117A1 1 0 0 0 15 7"
    />
  </Svg>
);
export default SvgCoinRupeeFilled;

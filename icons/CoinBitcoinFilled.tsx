import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoinBitcoinFilled = ({
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
    className="icon icon-tabler icon-tabler-coin-bitcoin-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M13 6a1 1 0 0 0-1 1h-1a1 1 0 0 0-2 0 1 1 0 1 0 0 2v6a1 1 0 0 0 0 2c0 1.333 2 1.333 2 0h1a1 1 0 0 0 2 0v-.15c1.167-.394 2-1.527 2-2.85l-.005-.175a3.06 3.06 0 0 0-.734-1.827c.46-.532.739-1.233.739-1.998 0-1.323-.833-2.456-2-2.85V7a1 1 0 0 0-1-1m.09 7c.492 0 .91.437.91 1s-.418 1-.91 1H11v-2zm0-4c.492 0 .91.437.91 1 0 .522-.36.937-.806.993L13.09 11H11V9z"
    />
  </Svg>
);
export default SvgCoinBitcoinFilled;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCoinMoneroFilled = ({
  size = 24,
  stroke = 2,
  ...props
}: {
  size: number,
  stroke: number,
  props: SVGProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-coin-monero-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M15 11.414V16a1 1 0 0 0 1 1l4.66.001a10 10 0 0 1-17.32 0L8 17l.117-.007A1 1 0 0 0 9 16v-4.585l2.293 2.292.094.083a1 1 0 0 0 1.32-.083zm2-8.074A10 10 0 0 1 21.54 15H17V9c0-.89-1.077-1.337-1.707-.707L12 11.585 8.707 8.293l-.084-.076C7.986 7.703 7 8.147 7 9v6H2.46A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 17 3.34"
    />
  </svg>
);
export default SvgCoinMoneroFilled;

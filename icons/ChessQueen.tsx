import * as React from "react";
import type { SVGProps } from "react";
const SvgChessQueen = ({
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
    className="icon icon-tabler icon-tabler-chess-queen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 16 2-11-4 4-2-5-2 5-4-4 2 11M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16z" />
    <path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgChessQueen;

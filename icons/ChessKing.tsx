import * as React from "react";
import type { SVGProps } from "react";
const SvgChessKing = ({
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
    className="icon icon-tabler icon-tabler-chess-king"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 16-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16zM8.5 16a3.5 3.5 0 1 1 3.163-5h.674a3.5 3.5 0 1 1 3.163 5zM9 6h6M12 3v8" />
  </svg>
);
export default SvgChessKing;

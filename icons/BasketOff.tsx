import * as React from "react";
import type { SVGProps } from "react";
const SvgBasketOff = ({
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
    className="icon icon-tabler icon-tabler-basket-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 10-2-6M7 10l.75-2.252m1.001-3.002L9 4M12 8h7a2 2 0 0 1 1.977 2.304C20.535 12.82 20.221 14.742 20 16m-1.01 3.003a3 3 0 0 1-2.234.997H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H8" />
    <path d="M12 12a2 2 0 1 0 2 2M3 3l18 18" />
  </svg>
);
export default SvgBasketOff;

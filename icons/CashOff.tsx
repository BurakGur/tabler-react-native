import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOff = ({
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
    className="icon icon-tabler icon-tabler-cash-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 9h6a2 2 0 0 1 2 2v6m-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2" />
    <path d="M12.582 12.59a2 2 0 0 0 2.83 2.826M17 9V7a2 2 0 0 0-2-2H9M5 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M3 3l18 18" />
  </svg>
);
export default SvgCashOff;

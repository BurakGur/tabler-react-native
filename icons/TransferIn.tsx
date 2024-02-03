import * as React from "react";
import type { SVGProps } from "react";
const SvgTransferIn = ({
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
    className="icon icon-tabler icon-tabler-transfer-in"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 18v3h16V7l-8-4-8 4v3M4 14h9" />
    <path d="m10 11 3 3-3 3" />
  </svg>
);
export default SvgTransferIn;

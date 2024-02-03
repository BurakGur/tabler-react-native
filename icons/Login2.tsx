import * as React from "react";
import type { SVGProps } from "react";
const SvgLogin2 = ({
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
    className="icon icon-tabler icon-tabler-login-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 8V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2" />
    <path d="M3 12h13l-3-3M13 15l3-3" />
  </svg>
);
export default SvgLogin2;

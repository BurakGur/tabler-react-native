import * as React from "react";
import type { SVGProps } from "react";
const SvgLemon = ({
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
    className="icon icon-tabler icon-tabler-lemon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0z" />
    <path d="M5.868 15.06a6.5 6.5 0 0 0 9.193-9.192M10.464 10.464l4.597 4.597M10.464 10.464v6.364M10.464 10.464h6.364" />
  </svg>
);
export default SvgLemon;

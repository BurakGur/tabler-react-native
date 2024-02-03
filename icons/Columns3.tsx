import * as React from "react";
import type { SVGProps } from "react";
const SvgColumns3 = ({
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
    className="icon icon-tabler icon-tabler-columns-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm6-1v18m6-18v18" />
  </svg>
);
export default SvgColumns3;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCrane = ({
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
    className="icon icon-tabler icon-tabler-crane"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 21h6M9 21V3L3 9h18M9 3l10 6" />
    <path d="M17 9v4a2 2 0 1 1-2 2" />
  </svg>
);
export default SvgCrane;

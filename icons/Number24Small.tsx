import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber24Small = ({
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
    className="icon icon-tabler icon-tabler-number-24-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 8v3a1 1 0 0 0 1 1h3M18 8v8M6 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3" />
  </svg>
);
export default SvgNumber24Small;

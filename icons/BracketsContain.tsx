import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsContain = ({
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
    className="icon icon-tabler icon-tabler-brackets-contain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 4H3v16h4M17 4h4v16h-4M8 16h.01M12 16h.01M16 16h.01" />
  </svg>
);
export default SvgBracketsContain;

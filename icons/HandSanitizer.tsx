import * as React from "react";
import type { SVGProps } from "react";
const SvgHandSanitizer = ({
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
    className="icon icon-tabler icon-tabler-hand-sanitizer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 21h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3zM15 3H9a2 2 0 0 0-2 2M12 3v5M12 11v4M10 13h4" />
  </svg>
);
export default SvgHandSanitizer;

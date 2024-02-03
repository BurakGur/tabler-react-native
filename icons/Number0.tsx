import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber0 = ({
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
    className="icon icon-tabler icon-tabler-number-0"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 16V8M12 20a4 4 0 0 0 4-4V8a4 4 0 1 0-8 0v8a4 4 0 0 0 4 4" />
  </svg>
);
export default SvgNumber0;

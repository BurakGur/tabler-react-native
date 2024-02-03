import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareToggle = ({
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
    className="icon icon-tabler icon-tabler-square-toggle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 2v20M14 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8M20 6a2 2 0 0 0-2-2M18 20a2 2 0 0 0 2-2M20 10v4" />
  </svg>
);
export default SvgSquareToggle;

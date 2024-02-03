import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPython = ({
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
    className="icon icon-tabler icon-tabler-brand-python"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4M11 6v.01M13 18v.01" />
  </svg>
);
export default SvgBrandPython;

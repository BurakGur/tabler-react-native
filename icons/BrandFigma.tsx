import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFigma = ({
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
    className="icon icon-tabler icon-tabler-brand-figma"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3" />
    <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3" />
  </svg>
);
export default SvgBrandFigma;

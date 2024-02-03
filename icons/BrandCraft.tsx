import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCraft = ({
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
    className="icon icon-tabler icon-tabler-brand-craft"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0-8-8 8 8 0 0 0 8-8M4 12h8M12 4v16" />
  </svg>
);
export default SvgBrandCraft;

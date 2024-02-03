import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandHbo = ({
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
    className="icon icon-tabler icon-tabler-brand-hbo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 16V8M6 8v8M2 12h4M9 16h2a2 2 0 1 0 0-4H9h2a2 2 0 1 0 0-4H9zM19 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    <path d="M18 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgBrandHbo;

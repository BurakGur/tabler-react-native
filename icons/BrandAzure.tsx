import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAzure = ({
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
    className="icon icon-tabler icon-tabler-brand-azure"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 7.5 2 17h4l6-15zM22 20 15 5l-3 7 4 5-8 3z" />
  </svg>
);
export default SvgBrandAzure;

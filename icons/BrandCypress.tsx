import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCypress = ({
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
    className="icon icon-tabler icon-tabler-brand-cypress"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.48 17.007A9 9 0 1 0 12 21a2.08 2.08 0 0 0 1.974-1.423L17.5 9M13.5 9l2 6" />
    <path d="M10.764 9.411a3 3 0 1 0-.023 5.19" />
  </svg>
);
export default SvgBrandCypress;

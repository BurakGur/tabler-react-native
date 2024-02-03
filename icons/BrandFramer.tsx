import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFramer = ({
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
    className="icon icon-tabler icon-tabler-brand-framer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 15h12L6 3h12v6H6zl6 6v-6" />
  </svg>
);
export default SvgBrandFramer;

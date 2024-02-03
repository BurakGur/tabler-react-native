import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandXing = ({
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
    className="icon icon-tabler icon-tabler-brand-xing"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 21-4-7 6.5-11M7 7l2 3.5L6 15" />
  </svg>
);
export default SvgBrandXing;

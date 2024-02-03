import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandRadixUi = ({
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
    className="icon icon-tabler icon-tabler-brand-radix-ui"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M6 3h5v5H6zM11 11v10a5 5 0 0 1-.217-9.995z" />
  </svg>
);
export default SvgBrandRadixUi;

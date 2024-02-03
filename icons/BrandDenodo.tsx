import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDenodo = ({
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
    className="icon icon-tabler icon-tabler-brand-denodo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 11h2v2h-2zM3.634 15.634l1.732-1 1 1.732-1.732 1zM11 19h2v2h-2zM18.634 14.634l1.732 1-1 1.732-1.732-1zM17.634 7.634l1.732-1 1 1.732-1.732 1zM11 3h2v2h-2zM3.634 8.366l1-1.732 1.732 1-1 1.732z" />
  </svg>
);
export default SvgBrandDenodo;

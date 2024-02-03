import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMyOppo = ({
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
    className="icon icon-tabler icon-tabler-brand-my-oppo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.316 5H5.684L2.266 9.019a1.09 1.09 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444z" />
    <path d="m9 11 3 3 3-3" />
  </svg>
);
export default SvgBrandMyOppo;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWish = ({
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
    className="icon icon-tabler icon-tabler-brand-wish"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m2 6 5.981 2.392-.639 6.037c-.18.893.06 1.819.65 2.514A3 3 0 0 0 10.373 18a4.33 4.33 0 0 0 4.132-3.57c-.18.893.06 1.819.65 2.514A3 3 0 0 0 17.535 18a4.33 4.33 0 0 0 4.132-3.57L22 9.797M14.504 14.429l.334-3" />
  </svg>
);
export default SvgBrandWish;

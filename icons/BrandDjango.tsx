import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDjango = ({
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
    className="icon icon-tabler icon-tabler-brand-django"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
    <path d="M12 7v8.5l-2.015.201a2.715 2.715 0 1 1 0-5.402L12 10.5M16 7v.01M16 10v5.586c0 .905-.36 1.774-1 2.414" />
  </svg>
);
export default SvgBrandDjango;

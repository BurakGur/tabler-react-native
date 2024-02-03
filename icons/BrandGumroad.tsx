import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGumroad = ({
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
    className="icon icon-tabler icon-tabler-brand-gumroad"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <path d="M13.5 13H16v3" />
    <path d="M15.024 9.382A4 4 0 1 0 12 16c1.862 0 2.554-1.278 3-3" />
  </svg>
);
export default SvgBrandGumroad;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNytimes = ({
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
    className="icon icon-tabler icon-tabler-brand-nytimes"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.036 5.058a8 8 0 1 0 8.706 9.965" />
    <path d="M12 21V10l-7.5 4M17.5 3a2.5 2.5 0 1 1 0 5l-11-5a2.5 2.5 0 0 0-.67 4.91M9 12v8M16 13h-.01" />
  </svg>
);
export default SvgBrandNytimes;

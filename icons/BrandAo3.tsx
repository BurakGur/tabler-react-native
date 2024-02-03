import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAo3 = ({
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
    className="icon icon-tabler icon-tabler-brand-ao3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 5c7.109 4.1 10.956 10.131 12 14 1.074-4.67 4.49-8.94 8-11" />
    <path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 9c-.278 5.494-2.337 7.33-4 10 4.013-2 6.02-5 15.05-5 4.012 0 3.51 2.5 1 3 2 .5 2.508 5-2.007 2" />
  </svg>
);
export default SvgBrandAo3;

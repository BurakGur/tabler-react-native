import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandXbox = ({
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
    className="icon icon-tabler icon-tabler-brand-xbox"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
    <path d="M17.5 5C9.78 7.266 7.463 12.597 5 17.5" />
  </svg>
);
export default SvgBrandXbox;

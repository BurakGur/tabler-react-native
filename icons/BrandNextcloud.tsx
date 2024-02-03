import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNextcloud = ({
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
    className="icon icon-tabler icon-tabler-brand-nextcloud"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M2 12.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M17 12.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" />
  </svg>
);
export default SvgBrandNextcloud;

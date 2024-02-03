import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSpacehey = ({
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
    className="icon icon-tabler icon-tabler-brand-spacehey"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 20h6v-6a3 3 0 0 0-6 0zM11 8v2.5A3.5 3.5 0 0 1 7.5 14H7a3 3 0 0 1 0-6z" />
  </svg>
);
export default SvgBrandSpacehey;

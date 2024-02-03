import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandValorant = ({
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
    className="icon icon-tabler icon-tabler-brand-valorant"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.5 14H19l2-2V6zM9 19h5L3 6v6z" />
  </svg>
);
export default SvgBrandValorant;

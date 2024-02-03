import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAbstract = ({
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
    className="icon icon-tabler icon-tabler-brand-abstract"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    <path d="M8 13.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0" />
    <path d="M8 8h8v8" />
  </svg>
);
export default SvgBrandAbstract;

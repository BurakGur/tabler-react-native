import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWalmart = ({
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
    className="icon icon-tabler icon-tabler-brand-walmart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 8.04V3M15.5 10 20 7.5M15.5 14l4.5 2.5M12 15.96V21M8.5 14 4 16.5M8.5 10 4 7.495" />
  </svg>
);
export default SvgBrandWalmart;

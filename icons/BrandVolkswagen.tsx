import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVolkswagen = ({
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
    className="icon icon-tabler icon-tabler-brand-volkswagen"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9" />
    <path d="m5 7 4.5 11 1.5-5h2l1.5 5L19 7" />
    <path d="m9 4 2 6h2l2-6" />
  </svg>
);
export default SvgBrandVolkswagen;

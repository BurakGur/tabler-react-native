import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSuperhuman = ({
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
    className="icon icon-tabler icon-tabler-brand-superhuman"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 12 4 3-8 7-8-7 4-3" />
    <path d="M12 3 4 9l8 6 8-6zM12 15h8" />
  </svg>
);
export default SvgBrandSuperhuman;

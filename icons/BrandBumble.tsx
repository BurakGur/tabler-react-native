import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBumble = ({
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
    className="icon icon-tabler icon-tabler-brand-bumble"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 12h10M9 8h6M10 16h4M16.268 3H7.732a1.46 1.46 0 0 0-1.268.748l-4.268 7.509a1.51 1.51 0 0 0 0 1.486l4.268 7.509c.26.462.744.747 1.268.748h8.536a1.46 1.46 0 0 0 1.268-.748l4.268-7.509a1.51 1.51 0 0 0 0-1.486l-4.268-7.509A1.46 1.46 0 0 0 16.268 3" />
  </svg>
);
export default SvgBrandBumble;

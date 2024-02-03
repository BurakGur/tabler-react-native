import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMessenger = ({
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
    className="icon icon-tabler icon-tabler-brand-messenger"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 20 1.3-3.9A9 8 0 1 1 7.7 19z" />
    <path d="m8 13 3-2 2 2 3-2" />
  </svg>
);
export default SvgBrandMessenger;

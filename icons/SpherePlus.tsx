import * as React from "react";
import type { SVGProps } from "react";
const SvgSpherePlus = ({
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
    className="icon icon-tabler icon-tabler-sphere-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12c0 1.657 4.03 3 9 3 1.116 0 2.185-.068 3.172-.192m5.724-2.35A1.1 1.1 0 0 0 21 12" />
    <path d="M20.984 12.546a9 9 0 1 0-8.442 8.438M16 19h6M19 16v6" />
  </svg>
);
export default SvgSpherePlus;

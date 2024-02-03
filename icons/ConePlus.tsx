import * as React from "react";
import type { SVGProps } from "react";
const SvgConePlus = ({
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
    className="icon icon-tabler icon-tabler-cone-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18.03 12.022-5.16-9.515a1 1 0 0 0-1.74 0L3 17.497v.5C3 19.657 7.03 21 12 21q.255 0 .508-.005M16 19h6M19 16v6" />
  </svg>
);
export default SvgConePlus;

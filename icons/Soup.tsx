import * as React from "react";
import type { SVGProps } from "react";
const SvgSoup = ({
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
    className="icon icon-tabler icon-tabler-soup"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 0 1 1-1M12 4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2M16 4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2M8 4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2" />
  </svg>
);
export default SvgSoup;

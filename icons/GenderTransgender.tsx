import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderTransgender = ({
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
    className="icon icon-tabler icon-tabler-gender-transgender"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M15 9l6-6M21 7V3h-4M9 9 3 3M3 7V3h4M5.5 8.5l3-3M12 16v5M9.5 19h5" />
  </svg>
);
export default SvgGenderTransgender;

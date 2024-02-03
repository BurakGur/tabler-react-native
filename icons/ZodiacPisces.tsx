import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacPisces = ({
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
    className="icon icon-tabler icon-tabler-zodiac-pisces"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 3a21 21 0 0 1 0 18M19 3a21 21 0 0 0 0 18M5 12h14" />
  </svg>
);
export default SvgZodiacPisces;

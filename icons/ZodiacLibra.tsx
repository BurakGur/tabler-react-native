import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacLibra = ({
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
    className="icon icon-tabler icon-tabler-zodiac-libra"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 20h14M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
  </svg>
);
export default SvgZodiacLibra;

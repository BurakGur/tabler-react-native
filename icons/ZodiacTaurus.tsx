import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacTaurus = ({
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
    className="icon icon-tabler icon-tabler-zodiac-taurus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 3a6 6 0 0 0 12 0" />
    <path d="M6 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
  </svg>
);
export default SvgZodiacTaurus;

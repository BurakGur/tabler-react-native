import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacVirgo = ({
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
    className="icon icon-tabler icon-tabler-zodiac-virgo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 4a2 2 0 0 1 2 2v9M5 6a2 2 0 0 1 4 0v9M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
    <path d="M12 21a7 5 0 0 0 7-5v-2a3 3 0 0 0-6 0" />
  </svg>
);
export default SvgZodiacVirgo;

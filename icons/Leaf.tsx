import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaf = ({
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
    className="icon icon-tabler icon-tabler-leaf"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21c.5-4.5 2.5-8 7-10" />
    <path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9 0 1 0 3 2 5h3z" />
  </svg>
);
export default SvgLeaf;

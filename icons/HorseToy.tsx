import * as React from "react";
import type { SVGProps } from "react";
const SvgHorseToy = ({
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
    className="icon icon-tabler icon-tabler-horse-toy"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.5 17.5q8.5 7 17 0" />
    <path d="M19 18.5 17 10l1-2 2 1 1.5-1.5L19 3c-5.052.218-5.99 3.133-7 6H6a3 3 0 0 0-3 3M5 18.5 7 9" />
    <path d="m8 20 2-5h4l2 5" />
  </svg>
);
export default SvgHorseToy;

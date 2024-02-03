import * as React from "react";
import type { SVGProps } from "react";
const SvgEditCircle = ({
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
    className="icon icon-tabler icon-tabler-edit-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zM16 5l3 3" />
    <path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" />
  </svg>
);
export default SvgEditCircle;

import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeClosed = ({
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
    className="icon icon-tabler icon-tabler-eye-closed"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 9q-3.6 4-9 4T3 9M3 15l2.5-3.8M21 14.976 18.508 11.2M9 17l.5-4M15 17l-.5-4" />
  </svg>
);
export default SvgEyeClosed;

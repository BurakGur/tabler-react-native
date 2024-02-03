import * as React from "react";
import type { SVGProps } from "react";
const SvgWriting = ({
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
    className="icon icon-tabler icon-tabler-writing"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2zM16 7h4M18 19H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6" />
  </svg>
);
export default SvgWriting;

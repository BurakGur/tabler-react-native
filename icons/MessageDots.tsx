import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageDots = ({
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
    className="icon icon-tabler icon-tabler-message-dots"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8zM12 11v.01M8 11v.01M16 11v.01" />
  </svg>
);
export default SvgMessageDots;

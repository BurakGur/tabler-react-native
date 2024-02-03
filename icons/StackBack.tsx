import * as React from "react";
import type { SVGProps } from "react";
const SvgStackBack = ({
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
    className="icon icon-tabler icon-tabler-stack-back"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 8 8 4 8-4-8-4z" />
    <path fill="currentColor" d="m12 16-4-2-4 2 8 4 8-4-4-2z" />
    <path d="m8 10-4 2 4 2m8 0 4-2-4-2" />
  </svg>
);
export default SvgStackBack;

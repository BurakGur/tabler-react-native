import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber11Small = ({
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
    className="icon icon-tabler icon-tabler-number-11-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 10 2-2v8M14 10l2-2v8" />
  </svg>
);
export default SvgNumber11Small;

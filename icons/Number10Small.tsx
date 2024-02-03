import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber10Small = ({
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
    className="icon icon-tabler icon-tabler-number-10-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 10 2-2v8M13 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0" />
  </svg>
);
export default SvgNumber10Small;

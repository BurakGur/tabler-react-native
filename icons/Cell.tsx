import * as React from "react";
import type { SVGProps } from "react";
const SvgCell = ({
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
    className="icon icon-tabler icon-tabler-cell"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4 4 6v5l4 2 4-2V6zM12 11l4 2 4-2V6l-4-2-4 2M8 13v5l4 2 4-2v-5" />
  </svg>
);
export default SvgCell;

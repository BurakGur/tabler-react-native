import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowUpFilled = ({
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
    className="icon icon-tabler icon-tabler-square-arrow-up-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5-.09.004-.058.007-.118.025-.105.035-.113.054-.111.071a1 1 0 0 0-.112.097l-4 4-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L11 10.415V16l.007.117A1 1 0 0 0 13 16v-5.585l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497l-4-4-.082-.073-.104-.074-.098-.052-.11-.044-.112-.03-.126-.017z"
    />
  </svg>
);
export default SvgSquareArrowUpFilled;

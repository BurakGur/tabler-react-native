import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMergeAltRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-merge-alt-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 7-4-4-4 4M6 21v.01M6 18.01v.01M7 15.02v.01M10 13.03v.01" />
    <path d="M12 3v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21" />
  </svg>
);
export default SvgArrowMergeAltRight;

import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMergeBoth = ({
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
    className="icon icon-tabler icon-tabler-arrow-merge-both"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 8-4-4-4 4M12 20V4M18 18q-6-2-6-10M6 18q6-2 6-10" />
  </svg>
);
export default SvgArrowMergeBoth;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop32 = ({
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
    className="icon icon-tabler icon-tabler-crop-3-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgCrop32;

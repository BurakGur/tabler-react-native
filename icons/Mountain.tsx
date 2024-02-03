import * as React from "react";
import type { SVGProps } from "react";
const SvgMountain = ({
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
    className="icon icon-tabler icon-tabler-mountain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0z" />
    <path d="m7.5 11 2 2.5L12 11l2 3 2.5-2" />
  </svg>
);
export default SvgMountain;

import * as React from "react";
import type { SVGProps } from "react";
const SvgWashDryDip = ({
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
    className="icon icon-tabler icon-tabler-wash-dry-dip"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zM12 7v10M16 7v10M8 7v10" />
  </svg>
);
export default SvgWashDryDip;

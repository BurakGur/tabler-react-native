import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsuleHorizontalFilled = ({
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
    className="icon icon-tabler icon-tabler-capsule-horizontal-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M15 5H9a7 7 0 1 0 0 14h6a7 7 0 0 0 7-7l-.007-.303A7 7 0 0 0 15 5"
    />
  </svg>
);
export default SvgCapsuleHorizontalFilled;

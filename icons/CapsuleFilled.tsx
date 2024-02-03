import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsuleFilled = ({
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
    className="icon icon-tabler icon-tabler-capsule-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m12 2-.243.004A7.004 7.004 0 0 0 5 9v6a7 7 0 0 0 7 7l.243-.004A7.004 7.004 0 0 0 19 15V9a7 7 0 0 0-7-7"
    />
  </svg>
);
export default SvgCapsuleFilled;

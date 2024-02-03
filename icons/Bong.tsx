import * as React from "react";
import type { SVGProps } from "react";
const SvgBong = ({
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
    className="icon icon-tabler icon-tabler-bong"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 3v8.416q.201.088.393.193L17 8l2 2-3.608 3.608A5 5 0 1 1 9 11.416V3zM8 3h6M6.1 17h9.8" />
  </svg>
);
export default SvgBong;

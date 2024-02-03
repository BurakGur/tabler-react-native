import * as React from "react";
import type { SVGProps } from "react";
const SvgTransfer = ({
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
    className="icon icon-tabler icon-tabler-transfer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 10H4l5.5-6M4 14h16l-5.5 6" />
  </svg>
);
export default SvgTransfer;

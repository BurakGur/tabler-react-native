import * as React from "react";
import type { SVGProps } from "react";
const SvgCubeSend = ({
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
    className="icon icon-tabler icon-tabler-cube-send"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m16 12.5-5-3 5-3 5 3V15l-5 3z" />
    <path d="M11 9.5V15l5 3M16 12.545l5-3.03M7 9H2M7 12H4M7 15H6" />
  </svg>
);
export default SvgCubeSend;

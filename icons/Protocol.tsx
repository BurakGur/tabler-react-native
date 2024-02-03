import * as React from "react";
import type { SVGProps } from "react";
const SvgProtocol = ({
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
    className="icon icon-tabler icon-tabler-protocol"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 6 8 18M20 6l-7 12M5 14v.015M5 10.015v.015" />
  </svg>
);
export default SvgProtocol;

import * as React from "react";
import type { SVGProps } from "react";
const SvgTrafficCone = ({
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
    className="icon icon-tabler icon-tabler-traffic-cone"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 20h16M9.4 10h5.2M7.8 15h8.4M6 20l5-15h2l5 15" />
  </svg>
);
export default SvgTrafficCone;

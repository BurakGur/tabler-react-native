import * as React from "react";
import type { SVGProps } from "react";
const SvgFlaskOff = ({
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
    className="icon icon-tabler icon-tabler-flask-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 3h6M13 9h1M10 3v3m-.268 3.736L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1l-1.143-3.142m-2.288-6.294L14 9V3M3 3l18 18" />
  </svg>
);
export default SvgFlaskOff;

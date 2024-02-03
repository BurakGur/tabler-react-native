import * as React from "react";
import type { SVGProps } from "react";
const SvgTimeDuration5 = ({
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
    className="icon icon-tabler icon-tabler-time-duration-5"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 15h2a1.5 1.5 0 0 0 0-3h-2V9h3.5M3 12v.01M21 12v.01M12 21v.01M7.5 4.2v.01M16.5 19.8v.01M7.5 19.8v.01M4.2 16.5v.01M19.8 16.5v.01M19.8 7.5v.01M4.2 7.5v.01M16.5 4.206A9.04 9.04 0 0 0 12 3" />
  </svg>
);
export default SvgTimeDuration5;

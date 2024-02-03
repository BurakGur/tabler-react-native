import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerOff = ({
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
    className="icon icon-tabler icon-tabler-pointer-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15.662 11.628 2.229-1.496a1.2 1.2 0 0 0-.309-2.228L9.569 5.601M4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 4.907 4.907a1.067 1.067 0 0 0 1.509 0l.524-.524M3 3l18 18" />
  </svg>
);
export default SvgPointerOff;

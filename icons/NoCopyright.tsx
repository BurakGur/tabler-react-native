import * as React from "react";
import type { SVGProps } from "react";
const SvgNoCopyright = ({
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
    className="icon icon-tabler icon-tabler-no-copyright"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M14 9.75a3.016 3.016 0 0 0-4.163.173 2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25M6 6l1.5 1.5M16.5 16.5 18 18" />
  </svg>
);
export default SvgNoCopyright;

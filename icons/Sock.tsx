import * as React from "react";
import type { SVGProps } from "react";
const SvgSock = ({
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
    className="icon icon-tabler icon-tabler-sock"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 3v6l4.798 5.142a4 4 0 0 1-5.441 5.86l-6.736-6.41A2 2 0 0 1 5 12.141V3z" />
    <path d="M7.895 15.768C8.603 15.047 9 14.091 9 13a4 4 0 0 0-4-4" />
  </svg>
);
export default SvgSock;

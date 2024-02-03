import * as React from "react";
import type { SVGProps } from "react";
const SvgChristmasBall = ({
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
    className="icon icon-tabler icon-tabler-christmas-ball"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
    <path d="m11 5 1-2 1 2M4.512 10.161Q8.256 8.504 12 11q3.941 2.628 7.882.653M4.315 15.252Q8.157 13.438 12 16q3.439 2.292 6.878 1.081" />
  </svg>
);
export default SvgChristmasBall;

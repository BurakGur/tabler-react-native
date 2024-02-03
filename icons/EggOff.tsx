import * as React from "react";
import type { SVGProps } from "react";
const SvgEggOff = ({
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
    className="icon icon-tabler icon-tabler-egg-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.927 17.934C16.716 19.792 14.576 20.887 12 21c-4.2 0-7-2.763-7-6.917 0-2.568.753-5.14 1.91-7.158M8.642 4.628C9.676 3.608 10.838 2.998 12 3c3.5.007 7 5.545 7 11.083q0 .447-.045.868M3 3l18 18" />
  </svg>
);
export default SvgEggOff;

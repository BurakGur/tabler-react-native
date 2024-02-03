import * as React from "react";
import type { SVGProps } from "react";
const SvgApple = ({
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
    className="icon icon-tabler icon-tabler-apple"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <path d="M12 11V5a2 2 0 0 1 2-2h2v1a2 2 0 0 1-2 2h-2" />
    <path d="M10 10.5q2 1 4 0" />
  </svg>
);
export default SvgApple;

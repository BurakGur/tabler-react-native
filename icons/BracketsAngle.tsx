import * as React from "react";
import type { SVGProps } from "react";
const SvgBracketsAngle = ({
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
    className="icon icon-tabler icon-tabler-brackets-angle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 4-5 8 5 8M16 4l5 8-5 8" />
  </svg>
);
export default SvgBracketsAngle;

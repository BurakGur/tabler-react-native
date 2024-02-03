import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowElbowRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-elbow-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 14V8h-6" />
    <path d="m21 8-9 9-9-9" />
  </svg>
);
export default SvgArrowElbowRight;

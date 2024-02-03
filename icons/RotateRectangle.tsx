import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateRectangle = ({
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
    className="icon icon-tabler icon-tabler-rotate-rectangle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10.09 4.01.496-.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1-2.83 0l-7.07-7.07a2 2 0 0 1 0-2.83L7.05 7.05H3.062M7.05 11.038V7.05" />
  </svg>
);
export default SvgRotateRectangle;

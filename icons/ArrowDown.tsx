import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = ({
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
    className="icon icon-tabler icon-tabler-arrow-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5v14M18 13l-6 6M6 13l6 6" />
  </svg>
);
export default SvgArrowDown;

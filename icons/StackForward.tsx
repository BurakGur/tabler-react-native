import * as React from "react";
import type { SVGProps } from "react";
const SvgStackForward = ({
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
    className="icon icon-tabler icon-tabler-stack-forward"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M12 5 4 9l8 4 8-4z" />
    <path d="m10 12-6 3 8 4 8-4-6-3" />
  </svg>
);
export default SvgStackForward;

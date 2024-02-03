import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipeDown = ({
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
    className="icon icon-tabler icon-tabler-swipe-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 12v8M9 17l3 3 3-3" />
  </svg>
);
export default SvgSwipeDown;

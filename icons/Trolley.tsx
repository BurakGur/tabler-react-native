import * as React from "react";
import type { SVGProps } from "react";
const SvgTrolley = ({
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
    className="icon icon-tabler icon-tabler-trolley"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 16l3 2M12 17l8-12M17 10l2 1M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8L10.2 13.41a1.3 1.3 0 0 1-1.792.394L5.102 11.7a1.3 1.3 0 0 1-.396-1.8L7.8 5.09a1.3 1.3 0 0 1 1.792-.394z" />
  </svg>
);
export default SvgTrolley;

import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationWest = ({
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
    className="icon icon-tabler icon-tabler-navigation-west"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 3 1 6 2-3.75L14 9l1-6M16 21l-4-8-4 8 4-2z" />
  </svg>
);
export default SvgNavigationWest;

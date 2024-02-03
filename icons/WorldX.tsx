import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldX = ({
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
    className="icon icon-tabler icon-tabler-world-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.929 13.131A9 9 0 1 0 11.998 21M3.6 9h16.8M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.505 10.573M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgWorldX;

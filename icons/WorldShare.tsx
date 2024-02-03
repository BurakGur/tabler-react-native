import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldShare = ({
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
    className="icon icon-tabler icon-tabler-world-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.94 13.045A9 9 0 1 0 11.987 21M3.6 9h16.8M3.6 15H13" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.529 10.294M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgWorldShare;

import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldDown = ({
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
    className="icon icon-tabler icon-tabler-world-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.986 12.509a9 9 0 1 0-8.455 8.476M3.6 9h16.8M3.6 15h10.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c2.313 3.706 3.07 7.857 2.27 12M19 16v6M22 19l-3 3-3-3" />
  </svg>
);
export default SvgWorldDown;

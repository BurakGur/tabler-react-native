import * as React from "react";
import type { SVGProps } from "react";
const SvgSunLow = ({
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
    className="icon icon-tabler icon-tabler-sun-low"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4 12h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31 6.3 6.3M17.71 6.31l-.01-.01M17.7 17.7l.01.01M6.3 17.7l.01.01" />
  </svg>
);
export default SvgSunLow;

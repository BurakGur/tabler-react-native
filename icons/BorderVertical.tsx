import * as React from "react";
import type { SVGProps } from "react";
const SvgBorderVertical = ({
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
    className="icon icon-tabler icon-tabler-border-vertical"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 4v16M4 4v.01M8 4v.01M16 4v.01M20 4v.01M4 8v.01M20 8v.01M4 12v.01M8 12v.01M16 12v.01M20 12v.01M4 16v.01M20 16v.01M4 20v.01M8 20v.01M16 20v.01M20 20v.01" />
  </svg>
);
export default SvgBorderVertical;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSelectAll = ({
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
    className="icon icon-tabler icon-tabler-select-all"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM12 20v.01M16 20v.01M8 20v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M20 8v.01M20 12v.01M20 16v.01M20 20v.01" />
  </svg>
);
export default SvgSelectAll;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSectionSign = ({
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
    className="icon icon-tabler icon-tabler-section-sign"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.172 19A3 3 0 1 0 12 15M14.83 5A3 3 0 1 0 12 9" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgSectionSign;

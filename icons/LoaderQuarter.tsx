import * as React from "react";
import type { SVGProps } from "react";
const SvgLoaderQuarter = ({
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
    className="icon icon-tabler icon-tabler-loader-quarter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 6V3M6 12H3M7.75 7.75 5.6 5.6" />
  </svg>
);
export default SvgLoaderQuarter;

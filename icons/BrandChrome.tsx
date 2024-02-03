import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandChrome = ({
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
    className="icon icon-tabler icon-tabler-brand-chrome"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 9h8.4M14.598 13.5l-4.2 7.275M9.402 13.5l-4.2-7.275" />
  </svg>
);
export default SvgBrandChrome;

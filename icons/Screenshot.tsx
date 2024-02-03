import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshot = ({
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
    className="icon icon-tabler icon-tabler-screenshot"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 19a2 2 0 0 1-2-2M5 13v-2M5 7a2 2 0 0 1 2-2M11 5h2M17 5a2 2 0 0 1 2 2M19 11v2M19 17v4M21 19h-4M13 19h-2" />
  </svg>
);
export default SvgScreenshot;

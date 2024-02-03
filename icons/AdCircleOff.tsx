import * as React from "react";
import type { SVGProps } from "react";
const SvgAdCircleOff = ({
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
    className="icon icon-tabler icon-tabler-ad-circle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.91 4.949A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 7.05-2.909M20.778 16.793A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10-1.74 0-3.376.444-4.8 1.225" />
    <path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138-1.358M9.854 9.853c.094.196.146.415.146.647V15M7 13h3M14 14v1h1M17 13v-2a2 2 0 0 0-2-2h-1v1M3 3l18 18" />
  </svg>
);
export default SvgAdCircleOff;

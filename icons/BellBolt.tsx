import * as React from "react";
import type { SVGProps } from "react";
const SvgBellBolt = ({
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
    className="icon icon-tabler icon-tabler-bell-bolt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1M9 17v1a3 3 0 0 0 4.368 2.67M19 16l-2 3h4l-2 3" />
  </svg>
);
export default SvgBellBolt;

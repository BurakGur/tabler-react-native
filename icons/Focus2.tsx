import * as React from "react";
import type { SVGProps } from "react";
const SvgFocus2 = ({
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
    className="icon icon-tabler icon-tabler-focus-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={12} r={0.5} fill="currentColor" />
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M12 3v2M3 12h2M12 19v2M19 12h2" />
  </svg>
);
export default SvgFocus2;

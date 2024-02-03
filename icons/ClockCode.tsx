import * as React from "react";
import type { SVGProps } from "react";
const SvgClockCode = ({
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
    className="icon icon-tabler icon-tabler-clock-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.931 13.111a9 9 0 1 0-9.453 7.874M20 21l2-2-2-2M17 17l-2 2 2 2" />
    <path d="M12 7v5l2 2" />
  </svg>
);
export default SvgClockCode;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLockAccessOff = ({
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
    className="icon icon-tabler icon-tabler-lock-access-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 8V6c0-.554.225-1.055.588-1.417M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2c.55 0 1.05-.222 1.41-.582M15 11a1 1 0 0 1 1 1m-.29 3.704A1 1 0 0 1 15 16H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2M10 11v-1m1.182-2.826A2 2 0 0 1 14 9v1M3 3l18 18" />
  </svg>
);
export default SvgLockAccessOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLockOpenOff = ({
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
    className="icon icon-tabler icon-tabler-lock-open-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4" />
    <path d="M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 11V8m.347-3.631A4 4 0 0 1 16 6M3 3l18 18" />
  </svg>
);
export default SvgLockOpenOff;

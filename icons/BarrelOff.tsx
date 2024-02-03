import * as React from "react";
import type { SVGProps } from "react";
const SvgBarrelOff = ({
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
    className="icon icon-tabler icon-tabler-barrel-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h8.722a2 2 0 0 1 1.841 1.22Q20 8.61 20 12a16.4 16.4 0 0 1-.407 3.609m-.964 3.013-.066.158A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12q0-3.315 1.374-6.63" />
    <path d="M14 4q.877 3.506.985 7.01m-.114 3.86A33.4 33.4 0 0 1 14 20M10 4a34 34 0 0 0-.366 1.632m-.506 3.501A32 32 0 0 0 9 12q0 4 1 8M4.5 16H16M19.5 8H12M8 8H4.5M3 3l18 18" />
  </svg>
);
export default SvgBarrelOff;

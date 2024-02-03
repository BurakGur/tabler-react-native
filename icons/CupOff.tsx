import * as React from "react";
import type { SVGProps } from "react";
const SvgCupOff = ({
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
    className="icon icon-tabler icon-tabler-cup-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 8H5v3h6m4 0h4V8h-7M17.5 11l-.323 2.154m-.525 3.497L16 21H8L6.5 11M6 8V7c0-.296.064-.577.18-.83M9 5h7a2 2 0 0 1 2 2v1M15 5V3M3 3l18 18" />
  </svg>
);
export default SvgCupOff;

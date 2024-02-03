import * as React from "react";
import type { SVGProps } from "react";
const SvgPilcrowLeft = ({
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
    className="icon icon-tabler icon-tabler-pilcrow-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 9H9a3 3 0 1 1 0-6h7M11 3v11M15 3v11M3 18h18M6 15l-3 3 3 3" />
  </svg>
);
export default SvgPilcrowLeft;

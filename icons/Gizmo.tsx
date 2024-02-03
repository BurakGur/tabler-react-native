import * as React from "react";
import type { SVGProps } from "react";
const SvgGizmo = ({
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
    className="icon icon-tabler icon-tabler-gizmo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m20 19-8-5.5L4 19M12 4v9.5M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgGizmo;

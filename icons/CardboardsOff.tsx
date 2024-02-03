import * as React from "react";
import type { SVGProps } from "react";
const SvgCardboardsOff = ({
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
    className="icon icon-tabler icon-tabler-cardboards-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.96 16.953q.04-.22.04-.453V8a2 2 0 0 0-2-2h-9M6 6H5a2 2 0 0 0-2 2v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06q.233 0 .454-.041" />
    <path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M16.714 12.7a1 1 0 0 0-1.417-1.411zM3 3l18 18" />
  </svg>
);
export default SvgCardboardsOff;

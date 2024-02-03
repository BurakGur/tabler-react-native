import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraExclamation = ({
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
    className="icon icon-tabler icon-tabler-camera-exclamation"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
    <path d="M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0M19 16v3M19 22v.01" />
  </svg>
);
export default SvgCameraExclamation;

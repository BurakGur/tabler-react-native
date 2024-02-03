import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraCode = ({
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
    className="icon icon-tabler icon-tabler-camera-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" />
    <path d="M14.948 13.559a3 3 0 1 0-2.58 2.419M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgCameraCode;

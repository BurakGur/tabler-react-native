import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraSelfie = ({
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
    className="icon icon-tabler icon-tabler-camera-selfie"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 7h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0M15 11h.01M9 11h.01" />
  </svg>
);
export default SvgCameraSelfie;

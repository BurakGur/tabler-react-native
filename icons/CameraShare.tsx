import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraShare = ({
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
    className="icon icon-tabler icon-tabler-camera-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.5 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" />
    <path d="M14.98 13.347a3 3 0 1 0-2.39 2.595M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgCameraShare;

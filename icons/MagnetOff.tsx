import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnetOff = ({
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
    className="icon icon-tabler icon-tabler-magnet-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578M15 11V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a8 8 0 0 1-.424 2.577m-1.463 2.584A8 8 0 0 1 4 13V5c0-.297.065-.58.181-.833M4 8h4M15 8h4M3 3l18 18" />
  </svg>
);
export default SvgMagnetOff;

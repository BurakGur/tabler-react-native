import * as React from "react";
import type { SVGProps } from "react";
const SvgAsset = ({
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
    className="icon icon-tabler icon-tabler-asset"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
    <path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14.218 17.975l6.619-12.174M6.079 9.756l12.217-6.631" />
    <path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgAsset;

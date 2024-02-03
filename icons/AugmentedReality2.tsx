import * as React from "react";
import type { SVGProps } from "react";
const SvgAugmentedReality2 = ({
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
    className="icon icon-tabler icon-tabler-augmented-reality-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5" />
    <path d="m17 17-4-2.5 4-2.5 4 2.5V19l-4 2.5z" />
    <path d="M13 14.5V19l4 2.5M17 17l4-2.5M11 4h2" />
  </svg>
);
export default SvgAugmentedReality2;

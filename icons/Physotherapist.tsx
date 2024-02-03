import * as React from "react";
import type { SVGProps } from "react";
const SvgPhysotherapist = ({
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
    className="icon icon-tabler icon-tabler-physotherapist"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 15-1-3 4-2 4 1h3.5M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 17v-7M8 20h7l1-4 4-2M18 20h3" />
  </svg>
);
export default SvgPhysotherapist;

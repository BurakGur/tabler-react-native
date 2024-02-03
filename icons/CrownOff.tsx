import * as React from "react";
import type { SVGProps } from "react";
const SvgCrownOff = ({
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
    className="icon icon-tabler icon-tabler-crown-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 18H5L3.135 8.673a.25.25 0 0 1 .4-.244L8 12l1.6-2.4m1.596-2.394L12 6l4 6 4.464-3.571a.25.25 0 0 1 .401.244l-1.363 6.818M3 3l18 18" />
  </svg>
);
export default SvgCrownOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAnchorOff = ({
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
    className="icon icon-tabler icon-tabler-anchor-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 12v9M4 13a8 8 0 0 0 14.138 5.13m1.44-2.56A8 8 0 0 0 20 13M21 13h-2M5 13H3M12.866 8.873a3 3 0 1 0-3.737-3.747M3 3l18 18" />
  </svg>
);
export default SvgAnchorOff;

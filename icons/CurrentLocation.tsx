import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrentLocation = ({
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
    className="icon icon-tabler icon-tabler-current-location"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0M12 2v2M12 20v2M20 12h2M2 12h2" />
  </svg>
);
export default SvgCurrentLocation;

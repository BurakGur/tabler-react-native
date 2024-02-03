import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyStarRing = ({
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
    className="icon icon-tabler icon-tabler-topology-star-ring"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4M14 12h4M13.5 5.5l5 5M5.5 13.5l5 5M13.5 18.5l5-5M10.5 5.5l-5 5M12 6v4M12 14v4" />
  </svg>
);
export default SvgTopologyStarRing;

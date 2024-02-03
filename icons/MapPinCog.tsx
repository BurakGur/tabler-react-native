import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinCog = ({
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
    className="icon icon-tabler icon-tabler-map-pin-cog"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <path d="M12.005 21.485a2 2 0 0 1-1.418-.585l-4.244-4.243a8 8 0 1 1 13.634-5.05M17.001 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M19.001 15.5V17M19.001 21v1.5M22.032 17.25l-1.299.75M17.27 20l-1.3.75M15.97 17.25l1.3.75M20.733 20l1.3.75" />
  </svg>
);
export default SvgMapPinCog;

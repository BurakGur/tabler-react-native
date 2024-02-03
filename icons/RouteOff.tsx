import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteOff = ({
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
    className="icon icon-tabler icon-tabler-route-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 19h4.5c.71 0 1.372-.212 1.924-.576m1.545-2.459A3.5 3.5 0 0 0 16.5 12h-.499m-4 0H8.5a3.5 3.5 0 0 1-2.477-5.972M8.5 5H12M3 3l18 18" />
  </svg>
);
export default SvgRouteOff;

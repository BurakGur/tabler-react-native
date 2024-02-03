import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteSquare2 = ({
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
    className="icon icon-tabler icon-tabler-route-square-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 5a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2M3 17h4v4H3zM17 3h4v4h-4z" />
  </svg>
);
export default SvgRouteSquare2;

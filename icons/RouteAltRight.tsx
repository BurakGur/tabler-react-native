import * as React from "react";
import type { SVGProps } from "react";
const SvgRouteAltRight = ({
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
    className="icon icon-tabler icon-tabler-route-alt-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 3h5v5M8 3H3v5" />
    <path d="m21 3-7.536 7.536A5 5 0 0 0 12 14.07V21M6 6.01V6M8 8.02v-.01M10 10v.01" />
  </svg>
);
export default SvgRouteAltRight;

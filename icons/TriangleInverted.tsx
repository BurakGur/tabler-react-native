import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangleInverted = ({
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
    className="icon icon-tabler icon-tabler-triangle-inverted"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.363 20.405 2.257 6.871A1.914 1.914 0 0 1 3.893 4h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1-3.274 0" />
  </svg>
);
export default SvgTriangleInverted;

import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler2 = ({
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
    className="icon icon-tabler icon-tabler-ruler-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 3 4 4L7 21l-4-4zM16 7l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5" />
  </svg>
);
export default SvgRuler2;

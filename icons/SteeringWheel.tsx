import * as React from "react";
import type { SVGProps } from "react";
const SvgSteeringWheel = ({
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
    className="icon icon-tabler icon-tabler-steering-wheel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 14v7M10 12l-6.75-2M14 12l6.75-2" />
  </svg>
);
export default SvgSteeringWheel;

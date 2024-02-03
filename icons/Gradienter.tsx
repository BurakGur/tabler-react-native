import * as React from "react";
import type { SVGProps } from "react";
const SvgGradienter = ({
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
    className="icon icon-tabler icon-tabler-gradienter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.227 14c.917 4 4.497 7 8.773 7 4.277 0 7.858-3 8.773-7M20.78 10A9 9 0 0 0 12 3a8.985 8.985 0 0 0-8.782 7" />
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgGradienter;

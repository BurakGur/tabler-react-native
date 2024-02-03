import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodPuzzled = ({
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
    className="icon icon-tabler icon-tabler-mood-puzzled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.986 3.51A9 9 0 1 0 16.5 19.794c2.489-1.437 4.181-3.978 4.5-6.794M10 10h.01M14 8h.01" />
    <path d="M12 15q1.5-2 3-2M20 9v.01M20 6a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgMoodPuzzled;

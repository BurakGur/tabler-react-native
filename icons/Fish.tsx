import * as React from "react";
import type { SVGProps } from "react";
const SvgFish = ({
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
    className="icon icon-tabler icon-tabler-fish"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16.69 7.44A6.97 6.97 0 0 0 15 12a6.97 6.97 0 0 0 1.699 4.571" />
    <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498C16.75 4.241 9.715 5.86 2 14.506M18 11v.01" />
    <path d="M11.5 10.5q-1 1.5 0 3" />
  </svg>
);
export default SvgFish;

import * as React from "react";
import type { SVGProps } from "react";
const SvgForbid2Filled = ({
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
    className="icon icon-tabler icon-tabler-forbid-2-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.293 4.953a1 1 0 0 0-1.414 0l-6 6-.083.094a1 1 0 0 0 1.497 1.32l6-6 .083-.094a1 1 0 0 0-.083-1.32"
    />
  </svg>
);
export default SvgForbid2Filled;

import * as React from "react";
import type { SVGProps } from "react";
const SvgProgress = ({
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
    className="icon icon-tabler icon-tabler-progress"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 20.777a9 9 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554M4.579 17.093a9 9 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305M6.907 4.579A9 9 0 0 1 10 3.223" />
  </svg>
);
export default SvgProgress;

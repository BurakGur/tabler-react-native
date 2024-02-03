import * as React from "react";
import type { SVGProps } from "react";
const SvgTrophyOff = ({
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
    className="icon icon-tabler icon-tabler-trophy-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 21h8M12 17v4M8 4h9M17 4v8q0 .465-.082.905m-1.384 2.632A5 5 0 0 1 7 12V7M3 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
  </svg>
);
export default SvgTrophyOff;

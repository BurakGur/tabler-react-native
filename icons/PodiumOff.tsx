import * as React from "react";
import type { SVGProps } from "react";
const SvgPodiumOff = ({
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
    className="icon icon-tabler icon-tabler-podium-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 8h7l-.621 2.485A2 2 0 0 1 16.439 12H16m-4 0H7.561a2 2 0 0 1-1.94-1.515L5 8h3M7 8V7m.864-3.106A3 3 0 0 1 10 3M8 12l1 9M15.599 15.613 15 21M7 21h10M3 3l18 18" />
  </svg>
);
export default SvgPodiumOff;

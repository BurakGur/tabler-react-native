import * as React from "react";
import type { SVGProps } from "react";
const SvgRobotFace = ({
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
    className="icon icon-tabler icon-tabler-robot-face"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
    <path d="M9 16q1.5 1 3 1c1.5 0 2-.333 3-1M9 7 8 3M15 7l1-4M9 12v-1M15 12v-1" />
  </svg>
);
export default SvgRobotFace;

import * as React from "react";
import type { SVGProps } from "react";
const SvgPuzzle2 = ({
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
    className="icon icon-tabler icon-tabler-puzzle-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M12 4v2.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5V12M12 12v1.5a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5V20M20 12h-2.5a.5.5 0 0 1-.5-.5 1.5 1.5 0 0 0-3 0 .5.5 0 0 1-.5.5H12M12 12h-1.5a.5.5 0 0 0-.5.5 1.5 1.5 0 0 1-3 0 .5.5 0 0 0-.5-.5H4" />
  </svg>
);
export default SvgPuzzle2;

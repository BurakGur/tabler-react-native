import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlightOff = ({
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
    className="icon icon-tabler icon-tabler-highlight-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 9-6 6v4h4l6-6m2-2 2.503-2.503a2.828 2.828 0 1 0-4-4l-2.497 2.497M12.5 5.5l4 4M4.5 13.5l4 4M19 15h2v2m-2 2h-6l3-3M3 3l18 18" />
  </svg>
);
export default SvgHighlightOff;

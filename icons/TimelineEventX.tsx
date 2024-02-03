import * as React from "react";
import type { SVGProps } from "react";
const SvgTimelineEventX = ({
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
    className="icon icon-tabler icon-tabler-timeline-event-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 20a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 20H4M14 20h6M12 15l-2-2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zM13.5 9.5l-3-3M10.5 9.5l3-3" />
  </svg>
);
export default SvgTimelineEventX;

import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForward10 = ({
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
    className="icon icon-tabler icon-tabler-rewind-forward-10"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 9 3-3-3-3" />
    <path d="M8 17.918A6 6 0 0 1 3 12a6 6 0 0 1 6-6h11M12 14v6M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0" />
  </svg>
);
export default SvgRewindForward10;

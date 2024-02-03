import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowWaveLeftUp = ({
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
    className="icon icon-tabler icon-tabler-arrow-wave-left-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 10H3v4" />
    <path d="M21 12c-.887-1.285-2.48-2.033-4-2-1.52-.033-3.113.715-4 2-.887 1.284-2.48 2.033-4 2-1.52.033-3-1-4-2l-2-2" />
  </svg>
);
export default SvgArrowWaveLeftUp;

import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowWaveRightDown = ({
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
    className="icon icon-tabler icon-tabler-arrow-wave-right-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 14h4v-4" />
    <path d="M3 12c.887 1.284 2.48 2.033 4 2 1.52.033 3.113-.716 4-2s2.48-2.033 4-2c1.52-.033 3 1 4 2l2 2" />
  </svg>
);
export default SvgArrowWaveRightDown;

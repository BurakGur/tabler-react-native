import * as React from "react";
import type { SVGProps } from "react";
const SvgClockPlay = ({
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
    className="icon icon-tabler icon-tabler-clock-play"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 7v5l2 2M17 22l5-3-5-3z" />
    <path d="M13.017 20.943a9 9 0 1 1 7.831-7.292" />
  </svg>
);
export default SvgClockPlay;

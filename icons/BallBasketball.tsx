import * as React from "react";
import type { SVGProps } from "react";
const SvgBallBasketball = ({
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
    className="icon icon-tabler icon-tabler-ball-basketball"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M5.65 5.65l12.7 12.7M5.65 18.35l12.7-12.7" />
    <path d="M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 1 9 9" />
  </svg>
);
export default SvgBallBasketball;

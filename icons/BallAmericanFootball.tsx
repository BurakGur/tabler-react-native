import * as React from "react";
import type { SVGProps } from "react";
const SvgBallAmericanFootball = ({
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
    className="icon icon-tabler icon-tabler-ball-american-football"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15 9-6 6M10 12l2 2M12 10l2 2M8 21a5 5 0 0 0-5-5" />
    <path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5" />
    <path d="M16 3a5 5 0 0 0 5 5" />
  </svg>
);
export default SvgBallAmericanFootball;

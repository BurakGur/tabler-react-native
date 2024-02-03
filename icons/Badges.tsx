import * as React from "react";
import type { SVGProps } from "react";
const SvgBadges = ({
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
    className="icon icon-tabler icon-tabler-badges"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 17v-4l-5 3-5-3v4l5 3zM17 8V4l-5 3-5-3v4l5 3z" />
  </svg>
);
export default SvgBadges;

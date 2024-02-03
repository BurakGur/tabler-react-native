import * as React from "react";
import type { SVGProps } from "react";
const SvgShiJumping = ({
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
    className="icon icon-tabler icon-tabler-shi-jumping"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 17.5 12 13V7l5 4M7 17.5l5-4.5" />
    <path d="m15.103 21.58 6.762-14.502a2 2 0 0 0-.968-2.657M8.897 21.58 2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4" />
  </svg>
);
export default SvgShiJumping;

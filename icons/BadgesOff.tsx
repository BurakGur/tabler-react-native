import * as React from "react";
import type { SVGProps } from "react";
const SvgBadgesOff = ({
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
    className="icon icon-tabler icon-tabler-badges-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.505 14.497 12 16l-5-3v4l5 3 5-3M13.873 9.876 17 8V4l-5 3-2.492-1.495M7 7v1l2.492 1.495M3 3l18 18" />
  </svg>
);
export default SvgBadgesOff;

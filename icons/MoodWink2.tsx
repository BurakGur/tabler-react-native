import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodWink2 = ({
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
    className="icon icon-tabler icon-tabler-mood-wink-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M9 10h-.01" />
    <path d="M14.5 15a3.5 3.5 0 0 1-5 0M15.5 8.5 14 10l1.5 1.5" />
  </svg>
);
export default SvgMoodWink2;

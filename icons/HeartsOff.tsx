import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartsOff = ({
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
    className="icon icon-tabler icon-tabler-hearts-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.017 18 12 20l-7.5-7.428a5 5 0 0 1 .49-7.586m3.01-1a5 5 0 0 1 4 2.018 5 5 0 0 1 8.153 5.784" />
    <path d="M11.814 11.814a2.81 2.81 0 0 0-.007 3.948L15.989 20l2.01-2.021m1.977-1.99.211-.212a2.81 2.81 0 0 0 0-3.948 2.747 2.747 0 0 0-3.91-.007l-.283.178M3 3l18 18" />
  </svg>
);
export default SvgHeartsOff;

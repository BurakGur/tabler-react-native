import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerCheck = ({
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
    className="icon icon-tabler icon-tabler-pointer-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17.487 14.93-2.709-2.708 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093.785.785M15 19l2 2 4-4" />
  </svg>
);
export default SvgPointerCheck;

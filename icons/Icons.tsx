import * as React from "react";
import type { SVGProps } from "react";
const SvgIcons = ({
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
    className="icon icon-tabler icon-tabler-icons"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M2.5 21h8l-4-7zM14 3l7 7M14 10l7-7M14 14h7v7h-7z" />
  </svg>
);
export default SvgIcons;

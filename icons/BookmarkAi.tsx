import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkAi = ({
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
    className="icon icon-tabler icon-tabler-bookmark-ai"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.02 18.32 6 21V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4.5M14 21v-4a2 2 0 1 1 4 0v4M14 19h4M21 15v6" />
  </svg>
);
export default SvgBookmarkAi;

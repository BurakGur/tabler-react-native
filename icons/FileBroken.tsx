import * as React from "react";
import type { SVGProps } from "react";
const SvgFileBroken = ({
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
    className="icon icon-tabler icon-tabler-file-broken"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 7V5a2 2 0 0 1 2-2h7l5 5v2M19 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2M5 16h.01M5 13h.01M5 10h.01M19 13h.01M19 16h.01" />
  </svg>
);
export default SvgFileBroken;

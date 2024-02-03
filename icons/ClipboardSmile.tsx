import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardSmile = ({
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
    className="icon icon-tabler icon-tabler-clipboard-smile"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 13h.01M14 13h.01M10 16a3.5 3.5 0 0 0 4 0" />
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" />
  </svg>
);
export default SvgClipboardSmile;

import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeDoc = ({
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
    className="icon icon-tabler icon-tabler-file-type-doc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M5 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zM20 16.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0M12.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5" />
  </svg>
);
export default SvgFileTypeDoc;

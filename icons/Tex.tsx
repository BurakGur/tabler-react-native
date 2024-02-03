import * as React from "react";
import type { SVGProps } from "react";
const SvgTex = ({
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
    className="icon icon-tabler icon-tabler-tex"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 8V7H3v1M6 15V7M21 15l-5-8M16 15l5-8M14 11h-4v8h4M10 15h3" />
  </svg>
);
export default SvgTex;

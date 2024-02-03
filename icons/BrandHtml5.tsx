import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandHtml5 = ({
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
    className="icon icon-tabler icon-tabler-brand-html5"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m20 4-2 14.5-6 2-6-2L4 4z" />
    <path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
  </svg>
);
export default SvgBrandHtml5;

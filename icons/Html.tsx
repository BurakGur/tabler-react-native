import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = ({
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
    className="icon icon-tabler icon-tabler-html"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 16V8l2 5 2-5v8M1 16V8M5 8v8M1 12h4M7 8h4M9 8v8M20 8v8h3" />
  </svg>
);
export default SvgHtml;

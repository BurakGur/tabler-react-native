import * as React from "react";
import type { SVGProps } from "react";
const SvgScriptPlus = ({
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
    className="icon icon-tabler icon-tabler-script-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 19h4M14 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0-3 3m7-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8M19 17v4" />
  </svg>
);
export default SvgScriptPlus;

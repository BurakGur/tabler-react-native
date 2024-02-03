import * as React from "react";
import type { SVGProps } from "react";
const SvgTextGrammar = ({
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
    className="icon icon-tabler icon-tabler-text-grammar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0M4 12V7a3 3 0 1 1 6 0v5M4 9h6M20 6v6M4 16h12M4 20h6M14 20l2 2 5-5" />
  </svg>
);
export default SvgTextGrammar;

import * as React from "react";
import type { SVGProps } from "react";
const SvgZodiacGemini = ({
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
    className="icon icon-tabler icon-tabler-zodiac-gemini"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 3a21 21 0 0 0 18 0M3 21a21 21 0 0 1 18 0M7 4.5v15M17 4.5v15" />
  </svg>
);
export default SvgZodiacGemini;

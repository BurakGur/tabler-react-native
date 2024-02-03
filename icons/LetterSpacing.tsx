import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterSpacing = ({
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
    className="icon icon-tabler icon-tabler-letter-spacing"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12V6.5a2.5 2.5 0 0 1 5 0V12m0-4H5M13 4l3 8 3-8M5 18h14M17 20l2-2-2-2M7 16l-2 2 2 2" />
  </svg>
);
export default SvgLetterSpacing;

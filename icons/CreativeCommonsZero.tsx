import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommonsZero = ({
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
    className="icon icon-tabler icon-tabler-creative-commons-zero"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M9 12a3 4 0 1 0 6 0 3 4 0 1 0-6 0M14 9l-4 6" />
  </svg>
);
export default SvgCreativeCommonsZero;

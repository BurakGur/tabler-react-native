import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommonsBy = ({
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
    className="icon icon-tabler icon-tabler-creative-commons-by"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M11 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 13v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.5l-.5 4h-2l-.5-4H10a1 1 0 0 1-1-1" />
  </svg>
);
export default SvgCreativeCommonsBy;

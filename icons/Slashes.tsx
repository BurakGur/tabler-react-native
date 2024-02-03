import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashes = ({
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
    className="icon icon-tabler icon-tabler-slashes"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 5 4 19M20 5 10 19" />
  </svg>
);
export default SvgSlashes;

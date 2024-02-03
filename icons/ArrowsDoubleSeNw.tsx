import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDoubleSeNw = ({
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
    className="icon icon-tabler icon-tabler-arrows-double-se-nw"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 10 11 11M14 17v4h-4M14 3h-4v4M21 14 10 3" />
  </svg>
);
export default SvgArrowsDoubleSeNw;

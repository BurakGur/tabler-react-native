import * as React from "react";
import type { SVGProps } from "react";
const SvgTallymarks = ({
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
    className="icon icon-tabler icon-tabler-tallymarks"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 5v14M10 5v14M14 5v14M18 5v14M3 17 21 7" />
  </svg>
);
export default SvgTallymarks;

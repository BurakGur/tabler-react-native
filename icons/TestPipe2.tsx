import * as React from "react";
import type { SVGProps } from "react";
const SvgTestPipe2 = ({
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
    className="icon icon-tabler icon-tabler-test-pipe-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 3v15a3 3 0 0 1-6 0V3M9 12h6M8 3h8" />
  </svg>
);
export default SvgTestPipe2;

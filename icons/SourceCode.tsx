import * as React from "react";
import type { SVGProps } from "react";
const SvgSourceCode = ({
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
    className="icon icon-tabler icon-tabler-source-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5M6 5 4 7l2 2" />
    <path d="m10 9 2-2-2-2" />
  </svg>
);
export default SvgSourceCode;

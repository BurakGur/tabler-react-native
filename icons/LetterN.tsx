import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterN = ({
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
    className="icon icon-tabler icon-tabler-letter-n"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 20V4l10 16V4" />
  </svg>
);
export default SvgLetterN;

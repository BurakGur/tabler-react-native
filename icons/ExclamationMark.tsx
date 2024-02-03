import * as React from "react";
import type { SVGProps } from "react";
const SvgExclamationMark = ({
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
    className="icon icon-tabler icon-tabler-exclamation-mark"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 19v.01M12 15V5" />
  </svg>
);
export default SvgExclamationMark;

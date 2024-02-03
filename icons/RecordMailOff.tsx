import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordMailOff = ({
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
    className="icon icon-tabler icon-tabler-record-mail-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M18.569 14.557a3 3 0 1 0-4.113-4.149M7 15h8M3 3l18 18" />
  </svg>
);
export default SvgRecordMailOff;

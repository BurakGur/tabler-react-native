import * as React from "react";
import type { SVGProps } from "react";
const SvgSchool = ({
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
    className="icon icon-tabler icon-tabler-school"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 9 12 5 2 9l10 4zv6" />
    <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
  </svg>
);
export default SvgSchool;

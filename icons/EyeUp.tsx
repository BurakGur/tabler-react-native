import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeUp = ({
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
    className="icon icon-tabler icon-tabler-eye-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M12 18q-5.4 0-9-6 3.6-6 9-6t9 6q-.135.224-.27.439M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgEyeUp;

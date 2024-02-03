import * as React from "react";
import type { SVGProps } from "react";
const SvgEyePlus = ({
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
    className="icon icon-tabler icon-tabler-eye-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M12 18q-5.4 0-9-6 3.6-6 9-6t9 6M16 19h6M19 16v6" />
  </svg>
);
export default SvgEyePlus;

import * as React from "react";
import type { SVGProps } from "react";
const SvgPassword = ({
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
    className="icon icon-tabler icon-tabler-password"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 10v4M10 13l4-2M10 11l4 2M5 10v4M3 13l4-2M3 11l4 2M19 10v4M17 13l4-2M17 11l4 2" />
  </svg>
);
export default SvgPassword;

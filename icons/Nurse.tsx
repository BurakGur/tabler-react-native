import * as React from "react";
import type { SVGProps } from "react";
const SvgNurse = ({
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
    className="icon icon-tabler icon-tabler-nurse"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 6c2.941 0 5.685.847 8 2.31L18 18H6L4 8.309A14.93 14.93 0 0 1 12 6M10 12h4M12 10v4" />
  </svg>
);
export default SvgNurse;

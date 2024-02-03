import * as React from "react";
import type { SVGProps } from "react";
const SvgAngle = ({
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
    className="icon icon-tabler icon-tabler-angle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 19H3l9-15M20.615 15.171h.015M19.515 11.771h.015M17.715 8.671h.015M15.415 5.971h.015" />
  </svg>
);
export default SvgAngle;

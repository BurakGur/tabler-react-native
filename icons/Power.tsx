import * as React from "react";
import type { SVGProps } from "react";
const SvgPower = ({
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
    className="icon icon-tabler icon-tabler-power"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0M12 4v8" />
  </svg>
);
export default SvgPower;

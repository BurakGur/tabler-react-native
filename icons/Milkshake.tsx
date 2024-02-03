import * as React from "react";
import type { SVGProps } from "react";
const SvgMilkshake = ({
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
    className="icon icon-tabler icon-tabler-milkshake"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 10a5 5 0 0 0-10 0M6 11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM7 13l1.81 7.243a1 1 0 0 0 .97.757h4.44a1 1 0 0 0 .97-.757L17 13M12 5V3" />
  </svg>
);
export default SvgMilkshake;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingLighthouse = ({
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
    className="icon icon-tabler icon-tabler-building-lighthouse"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 3 2 3 2 15H8l2-15zM8 9h8M3 11l2-2-2-2M21 11l-2-2 2-2" />
  </svg>
);
export default SvgBuildingLighthouse;

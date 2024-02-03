import * as React from "react";
import type { SVGProps } from "react";
const SvgBriefcase = ({
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
    className="icon icon-tabler icon-tabler-briefcase"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 12v.01" />
    <path d="M3 13a20 20 0 0 0 18 0" />
  </svg>
);
export default SvgBriefcase;

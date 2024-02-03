import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGitlab = ({
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
    className="icon icon-tabler icon-tabler-brand-gitlab"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m21 14-9 7-9-7L6 3l3 7h6l3-7z" />
  </svg>
);
export default SvgBrandGitlab;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGit = ({
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
    className="icon icon-tabler icon-tabler-brand-git"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 15V9M15 11l-2-2M11 7 9.1 5.1" />
    <path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0z" />
  </svg>
);
export default SvgBrandGit;

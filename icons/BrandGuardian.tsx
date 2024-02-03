import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGuardian = ({
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
    className="icon icon-tabler icon-tabler-brand-guardian"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 13h6M4 12c0-9.296 9.5-9 9.5-9C10.692 3 9 7.373 9 12s1.763 8.976 4.572 8.976C13.572 20.999 4 22.068 4 12M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5M15 13v8s2.77-.37 4-2v-6M13.5 21H15M13.5 3h1" />
  </svg>
);
export default SvgBrandGuardian;

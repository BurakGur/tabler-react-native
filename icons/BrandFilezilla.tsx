import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFilezilla = ({
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
    className="icon icon-tabler icon-tabler-brand-filezilla"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 15.824a4.06 4.06 0 0 1-2.25.033c-.738-.201-2.018-.08-2.75.143l4.583-5H9" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="m8 15 2-8h5" />
  </svg>
);
export default SvgBrandFilezilla;

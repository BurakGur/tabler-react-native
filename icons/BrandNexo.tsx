import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNexo = ({
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
    className="icon icon-tabler icon-tabler-brand-nexo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 3 5 3v12l-5 3-10-6V9l10 6V9l-5-3z" />
    <path d="M12 6 7 3 2 6v12l5 3 4.7-3.13" />
  </svg>
);
export default SvgBrandNexo;

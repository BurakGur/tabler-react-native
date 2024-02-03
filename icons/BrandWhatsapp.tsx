import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWhatsapp = ({
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
    className="icon icon-tabler icon-tabler-brand-whatsapp"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);
export default SvgBrandWhatsapp;

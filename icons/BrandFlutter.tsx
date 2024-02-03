import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFlutter = ({
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
    className="icon icon-tabler icon-tabler-brand-flutter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 14-3-3 8-8h6zM14 21l-5-5 5-5h5l-5 5 5 5z" />
  </svg>
);
export default SvgBrandFlutter;

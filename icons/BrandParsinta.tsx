import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandParsinta = ({
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
    className="icon icon-tabler icon-tabler-brand-parsinta"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3a9 9 0 1 0 9 9" />
    <path d="M21 12a9 9 0 0 0-9-9" opacity={0.5} />
    <path d="M10 9v6l5-3z" />
  </svg>
);
export default SvgBrandParsinta;

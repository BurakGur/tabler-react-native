import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGoogleOne = ({
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
    className="icon icon-tabler icon-tabler-brand-google-one"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 5v13.982a2 2 0 0 0 4 0V5a2 2 0 1 0-4 0" />
    <path d="M6.63 8.407a2.125 2.125 0 0 0-.074 2.944c.77.834 2.051.869 2.862.077l4.95-4.834c.812-.792.846-2.11.076-2.945a1.984 1.984 0 0 0-2.861-.077z" />
  </svg>
);
export default SvgBrandGoogleOne;

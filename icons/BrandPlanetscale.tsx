import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandPlanetscale = ({
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
    className="icon icon-tabler icon-tabler-brand-planetscale"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.993 11.63a9 9 0 0 1-9.362 9.362zM12 3a9 9 0 0 1 8.166 5.211L8.211 20.166A9 9 0 0 1 12 3M12 12l-6 6" />
  </svg>
);
export default SvgBrandPlanetscale;

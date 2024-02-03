import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSoundcloud = ({
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
    className="icon icon-tabler icon-tabler-brand-soundcloud"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 11h1c1.38 0 3 1.274 3 3 0 1.657-1.5 3-3 3h-6V7c3 0 4.5 1.5 5 4M9 8v9M6 17v-7M3 16v-2" />
  </svg>
);
export default SvgBrandSoundcloud;

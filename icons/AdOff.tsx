import * as React from "react";
import type { SVGProps } from "react";
const SvgAdOff = ({
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
    className="icon icon-tabler icon-tabler-ad-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
    <path d="M7 15v-4a2 2 0 0 1 2-2m2 2v4M7 13h4M17 9v4M16.115 12.131c.33.149.595.412.747.74M3 3l18 18" />
  </svg>
);
export default SvgAdOff;

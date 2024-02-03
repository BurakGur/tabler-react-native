import * as React from "react";
import type { SVGProps } from "react";
const SvgScooterElectric = ({
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
    className="icon icon-tabler icon-tabler-scooter-electric"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1M10 4 8 8h3l-2 4" />
  </svg>
);
export default SvgScooterElectric;

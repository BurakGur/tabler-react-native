import * as React from "react";
import type { SVGProps } from "react";
const SvgPlantOff = ({
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
    className="icon icon-tabler icon-tabler-plant-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h8M11.9 7.908a6 6 0 0 0-4.79-4.806M3 3v2a6 6 0 0 0 6 6h2M12.531 8.528A6 6 0 0 1 18 5h3v1a6 6 0 0 1-5.037 5.923M12 15v-3M3 3l18 18" />
  </svg>
);
export default SvgPlantOff;

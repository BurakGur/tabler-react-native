import * as React from "react";
import type { SVGProps } from "react";
const SvgCarGarage = ({
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
    className="icon icon-tabler icon-tabler-car-garage"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M5 20H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V9M3 6l9-4 9 4" />
  </svg>
);
export default SvgCarGarage;

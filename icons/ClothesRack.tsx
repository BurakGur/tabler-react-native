import * as React from "react";
import type { SVGProps } from "react";
const SvgClothesRack = ({
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
    className="icon icon-tabler icon-tabler-clothes-rack"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 7v14M9 21h6M7.757 9.243a6 6 0 0 0 8.486 0" />
  </svg>
);
export default SvgClothesRack;

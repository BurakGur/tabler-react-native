import * as React from "react";
import type { SVGProps } from "react";
const SvgPlant2 = ({
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
    className="icon icon-tabler icon-tabler-plant-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 9a10 10 0 1 0 20 0" />
    <path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" />
    <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5M9.01 11.5A9.7 9.7 0 0 1 12 4" />
  </svg>
);
export default SvgPlant2;

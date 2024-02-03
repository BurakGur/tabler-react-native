import * as React from "react";
import type { SVGProps } from "react";
const SvgPlant2Off = ({
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
    className="icon icon-tabler icon-tabler-plant-2-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 9c0 5.523 4.477 10 10 10a9.95 9.95 0 0 0 5.418-1.593m2.137-1.855A9.96 9.96 0 0 0 22 9" />
    <path d="M12 19c0-1.988.58-3.84 1.58-5.397m1.878-2.167A9.96 9.96 0 0 1 22 9M2 9a10 10 0 0 1 10 10M12 4a9.7 9.7 0 0 1 3 7.013" />
    <path d="M9.01 11.5a9.7 9.7 0 0 1 .163-2.318m1.082-2.942A9.7 9.7 0 0 1 12 4M3 3l18 18" />
  </svg>
);
export default SvgPlant2Off;

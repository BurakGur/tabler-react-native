import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignRight = ({
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
    className="icon icon-tabler icon-tabler-box-align-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8.998 20.003h.01M3.997 20.003h.011M3.997 15.002h.011M3.997 9.002h.011M3.997 4.002h.011M8.998 4.002h.01" />
  </svg>
);
export default SvgBoxAlignRight;

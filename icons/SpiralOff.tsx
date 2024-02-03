import * as React from "react";
import type { SVGProps } from "react";
const SvgSpiralOff = ({
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
    className="icon icon-tabler icon-tabler-spiral-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 12.057a1.9 1.9 0 0 0 .614.743c.682.459 1.509.374 2.164-.02m1.103-2.92a3.3 3.3 0 0 0-1.749-2.059 3.6 3.6 0 0 0-.507-.195M8.24 8.24a4.15 4.15 0 0 0-1.347 1.646c-1.095 2.432.29 5.248 2.71 6.246 1.955.806 4.097.35 5.65-.884m1.745-2.268.043-.103c1.36-3.343-.557-7.134-3.896-8.41-1.593-.61-3.27-.599-4.79-.113M5.776 5.762A7.6 7.6 0 0 0 3.508 8.89c-1.63 4.253.823 9.024 5.082 10.576 3.211 1.17 6.676.342 9.124-1.738m1.869-2.149A9.35 9.35 0 0 0 21 11.063M3 3l18 18" />
  </svg>
);
export default SvgSpiralOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTorchain = ({
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
    className="icon icon-tabler icon-tabler-brand-torchain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.588 15.537 12.035 12l-7.742 8.18c-.791.85.153 2.18 1.238 1.73l9.616-4.096a1.398 1.398 0 0 0 .44-2.277zM8.412 8.464 11.965 12l7.742-8.18c.791-.85-.153-2.18-1.238-1.73L8.853 6.188a1.398 1.398 0 0 0-.44 2.277z" />
  </svg>
);
export default SvgBrandTorchain;

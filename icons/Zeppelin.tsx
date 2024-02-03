import * as React from "react";
import type { SVGProps } from "react";
const SvgZeppelin = ({
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
    className="icon icon-tabler icon-tabler-zeppelin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778Q10.305 4 13.5 4" />
    <path d="M10 15.5V20h6v-4" />
  </svg>
);
export default SvgZeppelin;

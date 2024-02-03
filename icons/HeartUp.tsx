import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartUp = ({
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
    className="icon icon-tabler icon-tabler-heart-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 20-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.893 6.139M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgHeartUp;

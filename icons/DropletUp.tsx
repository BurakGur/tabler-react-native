import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletUp = ({
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
    className="icon icon-tabler icon-tabler-droplet-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.6 11.998a6.7 6.7 0 0 0-.536-1.12l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.16 7.16 0 0 0 5.002 1.562M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgDropletUp;

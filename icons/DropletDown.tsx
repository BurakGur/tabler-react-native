import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletDown = ({
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
    className="icon icon-tabler icon-tabler-droplet-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.602 12.003a6.7 6.7 0 0 0-.538-1.126l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.16 7.16 0 0 0 4.972 1.564M19 16v6M22 19l-3 3-3-3" />
  </svg>
);
export default SvgDropletDown;

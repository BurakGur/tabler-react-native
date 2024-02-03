import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletX = ({
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
    className="icon icon-tabler icon-tabler-droplet-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.953 13.467a6.6 6.6 0 0 0-.889-2.59l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.18 7.18 0 0 0 5.633 1.49M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgDropletX;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDropletOff = ({
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
    className="icon icon-tabler icon-tabler-droplet-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.963 14.938a6.54 6.54 0 0 0-.899-4.06l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.4 1.4 0 0 0-.41.397l-1.282 1.9M7.921 7.932l-1.986 2.946c-1.695 2.837-1.035 6.44 1.567 8.545s6.395 2.105 8.996 0a6.8 6.8 0 0 0 1.376-1.499M3 3l18 18" />
  </svg>
);
export default SvgDropletOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBeerOff = ({
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
    className="icon icon-tabler icon-tabler-beer-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 7v1.111c0 1.242.29 2.467.845 3.578l.31.622A8 8 0 0 1 9 15.889V20h6v-4.111a8 8 0 0 1 .045-.85m.953-3.035.157-.315A8 8 0 0 0 17 8.111V4H8M7 8h1m4 0h5M3 3l18 18" />
  </svg>
);
export default SvgBeerOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgMushroomOff = ({
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
    className="icon icon-tabler icon-tabler-mushroom-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.874 5.89A8.13 8.13 0 0 0 4 11.1a.9.9 0 0 0 .9.9H12m4 0h3.1a.9.9 0 0 0 .9-.9C20 6.626 16.418 3 12 3c-1.43 0-2.774.38-3.936 1.047M10 12v7a2 2 0 1 0 4 0v-5M3 3l18 18" />
  </svg>
);
export default SvgMushroomOff;

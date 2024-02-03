import * as React from "react";
import type { SVGProps } from "react";
const SvgPizzaOff = ({
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
    className="icon icon-tabler icon-tabler-pizza-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.313 6.277 12 3l5.34 10.376m2.477 6.463A19.1 19.1 0 0 1 12 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958" />
    <path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105-.24 4.582-.713M11 14v-.01M3 3l18 18" />
  </svg>
);
export default SvgPizzaOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHomeOff = ({
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
    className="icon icon-tabler icon-tabler-smart-home-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.097 7.125 5.06 8.71a2.67 2.67 0 0 0-1.029 2.105v7.2a2 2 0 0 0 2 2h12c.559 0 1.064-.229 1.427-.598M20.03 16v-5.185c0-.823-.38-1.6-1.03-2.105l-5.333-4.148a2.666 2.666 0 0 0-3.274 0l-1.029.8" />
    <path d="M15.332 15.345c-2.213.976-5.335.86-7.332-.345M3 3l18 18" />
  </svg>
);
export default SvgSmartHomeOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxOff = ({
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
    className="icon icon-tabler icon-tabler-box-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.765 17.757 12 21l-8-4.5v-9l2.236-1.258m2.57-1.445L12 3l8 4.5V16M14.561 10.559 20 7.5M12 12v9M12 12 4 7.5M3 3l18 18" />
  </svg>
);
export default SvgBoxOff;

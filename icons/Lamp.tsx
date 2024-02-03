import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp = ({
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
    className="icon icon-tabler icon-tabler-lamp"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 20h6M12 20v-8M5 12h14l-4-8H9z" />
  </svg>
);
export default SvgLamp;

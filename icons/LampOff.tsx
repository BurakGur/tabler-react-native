import * as React from "react";
import type { SVGProps } from "react";
const SvgLampOff = ({
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
    className="icon icon-tabler icon-tabler-lamp-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 20h6M12 20v-8M7.325 7.35 5 12h7m4 0h3l-4-8H9l-.338.676M3 3l18 18" />
  </svg>
);
export default SvgLampOff;

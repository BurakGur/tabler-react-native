import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler2Off = ({
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
    className="icon icon-tabler icon-tabler-ruler-2-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7M16 7l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18" />
  </svg>
);
export default SvgRuler2Off;

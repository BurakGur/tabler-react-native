import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionsOff = ({
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
    className="icon icon-tabler icon-tabler-directions-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21v-4M12 13v-1M12 5V3M10 21h4M8 8v1h1m4 0h6l2-2-2-2H9M14 14v3H6l-2-2 2-2h7M3 3l18 18" />
  </svg>
);
export default SvgDirectionsOff;

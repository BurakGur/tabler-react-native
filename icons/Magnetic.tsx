import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnetic = ({
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
    className="icon icon-tabler icon-tabler-magnetic"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3v18M18 7c-.633-1.255-1.538-2-2.5-2-1.933 0-3.5 3.134-3.5 7s1.567 7 3.5 7 3.5-3.134 3.5-7v-1M6 7c.633-1.255 1.538-2 2.5-2 1.933 0 3.5 3.134 3.5 7s-1.567 7-3.5 7S5 15.866 5 12v-1" />
    <path d="m3 13 2-2 2 2M17 13l2-2 2 2" />
  </svg>
);
export default SvgMagnetic;

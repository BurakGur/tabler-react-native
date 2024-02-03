import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = ({
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
    className="icon icon-tabler icon-tabler-wifi"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 18h.01M9.172 15.172a4 4 0 0 1 5.656 0M6.343 12.343a8 8 0 0 1 11.314 0" />
    <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0" />
  </svg>
);
export default SvgWifi;

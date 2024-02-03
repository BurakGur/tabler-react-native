import * as React from "react";
import type { SVGProps } from "react";
const SvgVipOff = ({
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
    className="icon icon-tabler icon-tabler-vip-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 5h2m4 0h12M3 19h16M4 9l2 6h1l2-6M12 12v3M16 12V9h2a2 2 0 1 1 0 4h-1M3 3l18 18" />
  </svg>
);
export default SvgVipOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgWiperWash = ({
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
    className="icon icon-tabler icon-tabler-wiper-wash"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 11l5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0M12 20V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0" />
    <path d="M12 6a4 4 0 0 0-.4-1.8" />
    <path d="M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8" />
  </svg>
);
export default SvgWiperWash;

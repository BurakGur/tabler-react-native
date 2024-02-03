import * as React from "react";
import type { SVGProps } from "react";
const SvgBellUp = ({
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
    className="icon icon-tabler icon-tabler-bell-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1M9 17v1a3 3 0 0 0 3.49 2.96M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgBellUp;

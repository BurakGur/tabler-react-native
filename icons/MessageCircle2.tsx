import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircle2 = ({
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
    className="icon icon-tabler icon-tabler-message-circle-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 20 1.3-3.9A9 8 0 1 1 7.7 19z" />
  </svg>
);
export default SvgMessageCircle2;

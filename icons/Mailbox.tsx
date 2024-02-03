import * as React from "react";
import type { SVGProps } from "react";
const SvgMailbox = ({
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
    className="icon icon-tabler icon-tabler-mailbox"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18v-6a4 4 0 0 0-4-4H6.5" />
    <path d="M12 11V3h4l2 2-2 2h-4M6 15h1" />
  </svg>
);
export default SvgMailbox;

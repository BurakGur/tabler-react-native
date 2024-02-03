import * as React from "react";
import type { SVGProps } from "react";
const SvgMailShare = ({
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
    className="icon icon-tabler icon-tabler-mail-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
    <path d="m3 7 9 6 9-6M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgMailShare;

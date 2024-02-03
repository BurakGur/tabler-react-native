import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerUp = ({
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
    className="icon icon-tabler icon-tabler-pointer-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15.984 13.428-1.206-1.206 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 1.217 1.217M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
export default SvgPointerUp;

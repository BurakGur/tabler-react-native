import * as React from "react";
import type { SVGProps } from "react";
const SvgPointerCode = ({
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
    className="icon icon-tabler icon-tabler-pointer-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15.76 13.203-.982-.981 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093.67.67M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgPointerCode;

import * as React from "react";
import type { SVGProps } from "react";
const SvgPointer = ({
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
    className="icon icon-tabler icon-tabler-pointer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047-1.047a1.067 1.067 0 0 0 0-1.509l-4.907-4.907 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4z" />
  </svg>
);
export default SvgPointer;

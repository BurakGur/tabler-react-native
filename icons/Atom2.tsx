import * as React from "react";
import type { SVGProps } from "react";
const SvgAtom2 = ({
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
    className="icon icon-tabler icon-tabler-atom-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 21v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 0 1 3 13M16 20.1a9 9 0 0 0 5-7.1M6.2 5a9 9 0 0 1 11.4 0" />
  </svg>
);
export default SvgAtom2;

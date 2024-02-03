import * as React from "react";
import type { SVGProps } from "react";
const SvgSwordOff = ({
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
    className="icon icon-tabler icon-tabler-sword-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.938 7.937 15 4h5v5l-3.928 3.055m-2.259 1.757L11 16l-4 4-3-3 4-4 2.19-2.815M6.5 11.5l6 6M3 3l18 18" />
  </svg>
);
export default SvgSwordOff;

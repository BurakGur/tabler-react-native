import * as React from "react";
import type { SVGProps } from "react";
const SvgMaskOff = ({
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
    className="icon icon-tabler icon-tabler-mask-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.42 19.41A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.055.588-1.417M8 4h10a2 2 0 0 1 2 2v10" />
    <path d="M9.885 9.872a3 3 0 1 0 4.245 4.24m.582-3.396a3 3 0 0 0-1.438-1.433M3 3l18 18" />
  </svg>
);
export default SvgMaskOff;

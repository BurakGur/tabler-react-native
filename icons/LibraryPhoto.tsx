import * as React from "react";
import type { SVGProps } from "react";
const SvgLibraryPhoto = ({
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
    className="icon icon-tabler icon-tabler-library-photo"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 5.667A2.667 2.667 0 0 1 9.667 3h8.666A2.667 2.667 0 0 1 21 5.667v8.666A2.667 2.667 0 0 1 18.333 17H9.667A2.667 2.667 0 0 1 7 14.333z" />
    <path d="M4.012 7.26A2 2 0 0 0 3 8.997v10c0 1.1.9 2 2 2h10c.75 0 1.158-.385 1.5-1M17 7h.01" />
    <path d="m7 13 3.644-3.644a1.21 1.21 0 0 1 1.712 0L16 13" />
    <path d="m15 12 1.644-1.644a1.21 1.21 0 0 1 1.712 0L21 13" />
  </svg>
);
export default SvgLibraryPhoto;

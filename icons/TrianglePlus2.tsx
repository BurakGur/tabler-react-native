import * as React from "react";
import type { SVGProps } from "react";
const SvgTrianglePlus2 = ({
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
    className="icon icon-tabler icon-tabler-triangle-plus-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.69 12.027 13.636 3.59a1.914 1.914 0 0 0-3.274 0L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871H12M16 19h6M19 16v6" />
  </svg>
);
export default SvgTrianglePlus2;

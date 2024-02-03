import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceMaskOff = ({
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
    className="icon icon-tabler icon-tabler-face-mask-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 14.5h-.222C3.243 14.5 2 13.38 2 12s1.243-2.5 2.778-2.5H5M19 14.5h.222C20.756 14.5 22 13.38 22 12s-1.244-2.5-2.778-2.5H19M9 10h1m4 0h1M9 14h5" />
    <path d="M19 15V8.51a2 2 0 0 0-1.45-1.923l-5-1.429a2 2 0 0 0-1.1 0l-1.788.511m-3.118.891-.094.027A2 2 0 0 0 5 8.509v6.982a2 2 0 0 0 1.45 1.923l5 1.429a2 2 0 0 0 1.1 0l4.899-1.4M3 3l18 18" />
  </svg>
);
export default SvgFaceMaskOff;

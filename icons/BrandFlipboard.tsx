import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFlipboard = ({
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
    className="icon icon-tabler icon-tabler-brand-flipboard"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.973 3h16.054c.537 0 .973.436.973.973v4.052a.973.973 0 0 1-.973.973h-5.025v4.831c0 .648-.525 1.173-1.173 1.173H9v5.025a.973.973 0 0 1-.974.973H3.973A.973.973 0 0 1 3 20.027V3.973C3 3.436 3.436 3 3.973 3" />
  </svg>
);
export default SvgBrandFlipboard;

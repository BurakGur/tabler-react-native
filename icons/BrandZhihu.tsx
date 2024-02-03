import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandZhihu = ({
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
    className="icon icon-tabler icon-tabler-brand-zhihu"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 6h6v12h-2l-2 2-1-2h-1zM4 12h6.5M10.5 6h-5M6 4c-.5 2.5-1.5 3.5-2.5 4.5M8 6v7c0 4.5-2 5.5-4 7M11 18l-3-5" />
  </svg>
);
export default SvgBrandZhihu;

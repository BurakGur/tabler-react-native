import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDeviantart = ({
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
    className="icon icon-tabler icon-tabler-brand-deviantart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 3v4l-3.857 6H18v4h-6.429L9 21H6v-4l3.857-6H6V7h6.429L15 3z" />
  </svg>
);
export default SvgBrandDeviantart;

import * as React from "react";
import type { SVGProps } from "react";
const SvgInnerShadowTopRight = ({
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
    className="icon icon-tabler icon-tabler-inner-shadow-top-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18" />
    <path d="M18 12a6 6 0 0 0-6-6" />
  </svg>
);
export default SvgInnerShadowTopRight;

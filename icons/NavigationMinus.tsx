import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationMinus = ({
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
    className="icon icon-tabler icon-tabler-navigation-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.5 15Q15.652 10.995 12 3L4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5M16 19h6" />
  </svg>
);
export default SvgNavigationMinus;

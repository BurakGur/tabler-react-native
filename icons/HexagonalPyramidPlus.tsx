import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonalPyramidPlus = ({
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
    className="icon icon-tabler icon-tabler-hexagonal-pyramid-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18.642 12.04-5.804-9.583a.996.996 0 0 0-1.676 0L3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583H12.5M12 2 7 20.9M12 2l3.304 12.489M16 19h6M19 16v6" />
  </svg>
);
export default SvgHexagonalPyramidPlus;

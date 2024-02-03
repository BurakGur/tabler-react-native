import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleMinus2 = ({
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
    className="icon icon-tabler icon-tabler-circle-minus-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.475 15.029a9 9 0 1 0-7.962 5.957M16 19h6" />
  </svg>
);
export default SvgCircleMinus2;

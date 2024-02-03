import * as React from "react";
import type { SVGProps } from "react";
const SvgLambda = ({
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
    className="icon icon-tabler icon-tabler-lambda"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 20 6.5-9M19 20C13 20 13 4 7 4" />
  </svg>
);
export default SvgLambda;

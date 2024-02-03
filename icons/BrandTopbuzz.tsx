import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTopbuzz = ({
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
    className="icon icon-tabler icon-tabler-brand-topbuzz"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.417 8.655a.524.524 0 0 1-.405-.622l.986-4.617a.524.524 0 0 1 .626-.404l14.958 3.162c.285.06.467.339.406.622l-.987 4.618a.524.524 0 0 1-.625.404l-4.345-.92q-.296-.061-.353.197l-2.028 9.49a.527.527 0 0 1-.625.404l-4.642-.982a.527.527 0 0 1-.406-.622l2.028-9.493q.056-.255-.204-.31z" />
  </svg>
);
export default SvgBrandTopbuzz;

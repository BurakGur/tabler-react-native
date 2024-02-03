import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandTailwind = ({
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
    className="icon icon-tabler icon-tabler-brand-tailwind"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11.667 6Q7.933 6 7 9.667q1.4-1.834 3.267-1.375c.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968q3.734 0 4.667-3.667-1.4 1.834-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6m-4 6.5Q3.933 12.5 3 16.167q1.4-1.834 3.267-1.375c.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968q3.734 0 4.667-3.667-1.4 1.834-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968" />
  </svg>
);
export default SvgBrandTailwind;

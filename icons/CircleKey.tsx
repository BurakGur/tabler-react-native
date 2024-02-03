import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleKey = ({
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
    className="icon icon-tabler icon-tabler-circle-key"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <path d="m12.5 11.5-4 4L10 17M12 15l-1.5-1.5" />
  </svg>
);
export default SvgCircleKey;

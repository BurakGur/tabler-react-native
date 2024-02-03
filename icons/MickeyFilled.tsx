import * as React from "react";
import type { SVGProps } from "react";
const SvgMickeyFilled = ({
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
    className="icon icon-tabler icon-tabler-mickey-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M18.501 2a4.5 4.5 0 0 1 .878 8.913 8 8 0 1 1-15.374 3.372L4 14l.005-.285a8 8 0 0 1 .615-2.803 4.5 4.5 0 0 1-3.187-6.348 4.5 4.5 0 0 1 3.596-2.539l.225-.018L5.535 2l.244.009a4.5 4.5 0 0 1 4.215 4.247 8 8 0 0 1 4.013 0A4.5 4.5 0 0 1 18.5 2z"
    />
  </svg>
);
export default SvgMickeyFilled;

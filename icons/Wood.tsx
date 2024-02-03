import * as React from "react";
import type { SVGProps } from "react";
const SvgWood = ({
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
    className="icon icon-tabler icon-tabler-wood"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 5.5a6 2.5 0 1 0 12 0 6 2.5 0 1 0-12 0" />
    <path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 0 1 6 12.127V5.5M10 12.5V14M14 16v1" />
  </svg>
);
export default SvgWood;

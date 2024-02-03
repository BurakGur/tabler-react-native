import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeHeart = ({
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
    className="icon icon-tabler icon-tabler-eye-heart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.905 11.39a2 2 0 1 0-2.855 2.37" />
    <path d="M9.992 17.779Q5.909 16.848 3 12q3.6-6 9-6 4.998 0 8.454 5.14M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071z" />
  </svg>
);
export default SvgEyeHeart;

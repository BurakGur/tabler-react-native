import * as React from "react";
import type { SVGProps } from "react";
const SvgTrain = ({
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
    className="icon icon-tabler icon-tabler-train"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 13c0-3.87-3.37-7-10-7H3M3 15h16a2 2 0 0 0 2-2" />
    <path d="M3 6v5h17.5M3 10v4M8 11V6M13 11V6.5M3 19h18" />
  </svg>
);
export default SvgTrain;

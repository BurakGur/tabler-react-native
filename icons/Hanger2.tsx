import * as React from "react";
import type { SVGProps } from "react";
const SvgHanger2 = ({
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
    className="icon icon-tabler icon-tabler-hanger-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 9-7.971 4.428A2 2 0 0 0 3 15.177V16a2 2 0 0 0 2 2h1" />
    <path d="M18 18h1a2 2 0 0 0 2-2v-.823a2 2 0 0 0-1.029-1.749L12 9c-1.457-.81-1.993-2.333-2-4a2 2 0 1 1 4 0" />
    <path d="M6 18a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgHanger2;

import * as React from "react";
import type { SVGProps } from "react";
const SvgHemispherePlus = ({
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
    className="icon icon-tabler icon-tabler-hemisphere-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9" />
    <path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9M16 19h6M19 16v6" />
  </svg>
);
export default SvgHemispherePlus;

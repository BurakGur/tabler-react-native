import * as React from "react";
import type { SVGProps } from "react";
const SvgJetpack = ({
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
    className="icon icon-tabler icon-tabler-jetpack"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 6a3 3 0 1 0-6 0v7h6zM14 13h6V6a3 3 0 0 0-6 0zM5 16q0 3.5 2 5 2-1.5 2-5M15 16q0 3.5 2 5 2-1.5 2-5M10 8h4M10 11h4" />
  </svg>
);
export default SvgJetpack;

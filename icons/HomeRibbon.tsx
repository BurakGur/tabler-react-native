import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeRibbon = ({
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
    className="icon icon-tabler icon-tabler-home-ribbon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 15h5v7l-2.5-1.5L16 22z" />
    <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h1.5" />
  </svg>
);
export default SvgHomeRibbon;

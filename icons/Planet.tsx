import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet = ({
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
    className="icon icon-tabler icon-tabler-planet"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9-.745 1.46-5.783-.259-11.255-3.838-5.47-3.579-9.304-7.664-8.56-9.123.464-.91 2.926-.444 5.803.805" />
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
  </svg>
);
export default SvgPlanet;

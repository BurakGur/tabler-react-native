import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinDollar = ({
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
    className="icon icon-tabler icon-tabler-map-pin-dollar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <path d="M13.02 21.206a2 2 0 0 1-2.433-.306l-4.244-4.243a8 8 0 1 1 13.607-6.555M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17M19 21v1m0-8v1" />
  </svg>
);
export default SvgMapPinDollar;

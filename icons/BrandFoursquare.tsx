import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandFoursquare = ({
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
    className="icon icon-tabler icon-tabler-brand-foursquare"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3h10c.644 0 1.11.696.978 1.33l-1.984 9.859a1.014 1.014 0 0 1-1 .811H12.74c-.308 0-.6.141-.793.382l-4.144 5.25c-.599.752-1.809.331-1.809-.632V4c0-.564.44-1 1-1zM12 9h5" />
  </svg>
);
export default SvgBrandFoursquare;

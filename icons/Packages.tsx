import * as React from "react";
import type { SVGProps } from "react";
const SvgPackages = ({
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
    className="icon icon-tabler icon-tabler-packages"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 16.5-5-3 5-3 5 3V19l-5 3z" />
    <path d="M2 13.5V19l5 3M7 16.545l5-3.03M17 16.5l-5-3 5-3 5 3V19l-5 3zM12 19l5 3M17 16.5l5-3" />
    <path d="M12 13.5V8L7 5l5-3 5 3v5.5M7 5.03v5.455M12 8l5-3" />
  </svg>
);
export default SvgPackages;

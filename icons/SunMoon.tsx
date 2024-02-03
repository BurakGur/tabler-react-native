import * as React from "react";
import type { SVGProps } from "react";
const SvgSunMoon = ({
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
    className="icon icon-tabler icon-tabler-sun-moon"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.173 14.83a4 4 0 1 1 5.657-5.657" />
    <path d="m11.294 12.707.174.247a7.5 7.5 0 0 0 8.845 2.492A9 9 0 0 1 5.642 18.36M3 12h1M12 3v1M5.6 5.6l.7.7M3 21 21 3" />
  </svg>
);
export default SvgSunMoon;

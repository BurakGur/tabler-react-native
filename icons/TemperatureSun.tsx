import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperatureSun = ({
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
    className="icon icon-tabler icon-tabler-temperature-sun"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M13 16a4 4 0 1 0 0-8 4 4 0 0 0-1 .124M13 3v1M21 12h1M13 20v1M19.4 5.6l-.7.7M18.7 17.7l.7.7" />
  </svg>
);
export default SvgTemperatureSun;

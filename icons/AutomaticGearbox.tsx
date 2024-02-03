import * as React from "react";
import type { SVGProps } from "react";
const SvgAutomaticGearbox = ({
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
    className="icon icon-tabler icon-tabler-automatic-gearbox"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 17v4h1a2 2 0 1 0 0-4zM17 11h1.5a1.5 1.5 0 0 0 0-3H17v5M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3M9 11h4" />
  </svg>
);
export default SvgAutomaticGearbox;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCamper = ({
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
    className="icon icon-tabler icon-tabler-camper"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <path d="M5 18H4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4H3M9 18h6" />
    <path d="M19 18h1a1 1 0 0 0 1-1v-4l-3-5M21 13h-7M14 8v10" />
  </svg>
);
export default SvgCamper;

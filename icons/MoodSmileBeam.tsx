import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodSmileBeam = ({
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
    className="icon icon-tabler icon-tabler-mood-smile-beam"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
    <path d="M10 10c-.5-1-2.5-1-3 0M17 10c-.5-1-2.5-1-3 0M14.5 15a3.5 3.5 0 0 1-5 0" />
  </svg>
);
export default SvgMoodSmileBeam;

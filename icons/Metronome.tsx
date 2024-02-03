import * as React from "react";
import type { SVGProps } from "react";
const SvgMetronome = ({
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
    className="icon icon-tabler icon-tabler-metronome"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14.153 8.188-.72-3.236a2.493 2.493 0 0 0-4.867 0L5.541 18.566A2 2 0 0 0 7.493 21h7.014a2 2 0 0 0 1.952-2.434l-.524-2.357M11 18l9-13M19 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgMetronome;

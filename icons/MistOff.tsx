import * as React from "react";
import type { SVGProps } from "react";
const SvgMistOff = ({
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
    className="icon icon-tabler icon-tabler-mist-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5h9M3 10h7M18 10h1M5 15h5M14 15h1m4 0h2M3 20h9m4 0h3M3 3l18 18" />
  </svg>
);
export default SvgMistOff;

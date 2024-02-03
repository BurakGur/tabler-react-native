import * as React from "react";
import type { SVGProps } from "react";
const SvgBeachOff = ({
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
    className="icon icon-tabler icon-tabler-beach-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15.071 15.102a7.5 7.5 0 0 0-8.124 1.648M10.27 6.269 20.196 12a6 6 0 0 0-10.32-6.123" />
    <path d="M16.732 10C18.39 7.13 18.957 4.356 18 3.804S14.925 5.13 13.268 8M15 9l-.739 1.279M12.794 12.82 12 14.196M3 19.25A2.4 2.4 0 0 1 4 19a2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 1.135-.858M3 3l18 18" />
  </svg>
);
export default SvgBeachOff;

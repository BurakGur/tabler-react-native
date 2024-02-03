import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerOff = ({
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
    className="icon icon-tabler icon-tabler-ruler-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4m-3.713.299A1 1 0 0 0 11 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5c0-.284.118-.54.308-.722M4 8h2M4 12h3M4 16h2M12 4v3M16 4v2M3 3l18 18" />
  </svg>
);
export default SvgRulerOff;

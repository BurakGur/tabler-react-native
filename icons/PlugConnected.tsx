import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugConnected = ({
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
    className="icon icon-tabler icon-tabler-plug-connected"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 12 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5zM17 12l-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5M18.5 5.5 21 3M10 11l-2 2M13 14l-2 2" />
  </svg>
);
export default SvgPlugConnected;

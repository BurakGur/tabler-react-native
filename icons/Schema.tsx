import * as React from "react";
import type { SVGProps } from "react";
const SvgSchema = ({
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
    className="icon icon-tabler icon-tabler-schema"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 2h5v4H5zM15 10h5v4h-5zM5 18h5v4H5zM5 10h5v4H5zM10 12h5M7.5 6v4M7.5 14v4" />
  </svg>
);
export default SvgSchema;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSchemaOff = ({
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
    className="icon icon-tabler icon-tabler-schema-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 2h4v4M6 6H5V5M15 11v-1h5v4h-2M5 18h5v4H5zM5 10h5v4H5zM10 12h2M7.5 7.5V10M7.5 14v4M3 3l18 18" />
  </svg>
);
export default SvgSchemaOff;

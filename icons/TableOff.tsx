import * as React from "react";
import type { SVGProps } from "react";
const SvgTableOff = ({
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
    className="icon icon-tabler icon-tabler-table-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 3h12a2 2 0 0 1 2 2v12m-.585 3.413A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5c0-.55.223-1.05.583-1.412M3 10h7m4 0h7M10 3v3m0 4v11M3 3l18 18" />
  </svg>
);
export default SvgTableOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgFileReport = ({
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
    className="icon icon-tabler icon-tabler-file-report"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M17 13v4h4M12 3v4a1 1 0 0 0 1 1h4" />
    <path d="M11.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m0 3v4" />
  </svg>
);
export default SvgFileReport;

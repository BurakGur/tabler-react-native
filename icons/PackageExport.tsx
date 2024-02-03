import * as React from "react";
import type { SVGProps } from "react";
const SvgPackageExport = ({
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
    className="icon icon-tabler icon-tabler-package-export"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 21-8-4.5v-9L12 3l8 4.5V12M12 12l8-4.5M12 12v9M12 12 4 7.5M15 18h7M19 15l3 3-3 3" />
  </svg>
);
export default SvgPackageExport;

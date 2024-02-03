import * as React from "react";
import type { SVGProps } from "react";
const SvgDevicesSearch = ({
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
    className="icon icon-tabler icon-tabler-devices-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 13V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5" />
    <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22M16 9h2" />
  </svg>
);
export default SvgDevicesSearch;

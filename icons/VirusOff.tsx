import * as React from "react";
import type { SVGProps } from "react";
const SvgVirusOff = ({
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
    className="icon icon-tabler icon-tabler-virus-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 3 18 18M8.469 8.46a5 5 0 0 0 7.058 7.084M16.913 12.936a5 5 0 0 0-5.826-5.853M12 7V3M11 3h2M15.536 8.464l2.828-2.828M17.657 4.929l1.414 1.414M17 12h4M21 11v2M18.364 18.363l-.707.707M12 17v4M13 21h-2M8.465 15.536l-2.829 2.828M6.343 19.071 4.93 17.657M7 12H3M3 13v-2M5.636 5.637l-.707.707" />
  </svg>
);
export default SvgVirusOff;

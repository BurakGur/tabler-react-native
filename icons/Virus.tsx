import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = ({
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
    className="icon icon-tabler icon-tabler-virus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 7V3M11 3h2M15.536 8.464l2.828-2.828M17.657 4.929l1.414 1.414M17 12h4M21 11v2M15.535 15.536l2.829 2.828M19.071 17.657l-1.414 1.414M12 17v4M13 21h-2M8.465 15.536l-2.829 2.828M6.343 19.071 4.93 17.657M7 12H3M3 13v-2M8.464 8.464 5.636 5.636M4.929 6.343 6.343 4.93" />
  </svg>
);
export default SvgVirus;

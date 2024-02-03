import * as React from "react";
import type { SVGProps } from "react";
const SvgClockSearch = ({
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
    className="icon icon-tabler icon-tabler-clock-search"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.993 11.646a9 9 0 1 0-9.318 9.348" />
    <path d="M12 7v5l1 1M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </svg>
);
export default SvgClockSearch;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationBroken = ({
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
    className="icon icon-tabler icon-tabler-location-broken"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.896 19.792 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.487 9.657M21.5 21.5l-5-5M16.5 21.5l5-5" />
  </svg>
);
export default SvgLocationBroken;

import * as React from "react";
import type { SVGProps } from "react";
const SvgMedal2 = ({
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
    className="icon icon-tabler icon-tabler-medal-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 3h6l3 7-6 2-6-2zM12 12 9 3M15 11l-3-8M12 19.5 9 21l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 21z" />
  </svg>
);
export default SvgMedal2;

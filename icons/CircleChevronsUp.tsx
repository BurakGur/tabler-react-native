import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleChevronsUp = ({
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
    className="icon icon-tabler icon-tabler-circle-chevrons-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 15 3-3 3 3M9 11l3-3 3 3" />
    <path d="M12 21a9 9 0 1 0-.265 0z" />
  </svg>
);
export default SvgCircleChevronsUp;

import * as React from "react";
import type { SVGProps } from "react";
const SvgDirections = ({
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
    className="icon icon-tabler icon-tabler-directions"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21v-4M12 13V9M12 5V3M10 21h4M8 5v4h11l2-2-2-2zM14 13v4H6l-2-2 2-2z" />
  </svg>
);
export default SvgDirections;

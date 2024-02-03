import * as React from "react";
import type { SVGProps } from "react";
const SvgStackFront = ({
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
    className="icon icon-tabler icon-tabler-stack-front"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M12 4 4 8l8 4 8-4z" />
    <path d="m8 14-4 2 8 4 8-4-4-2" />
    <path d="m8 10-4 2 8 4 8-4-4-2" />
  </svg>
);
export default SvgStackFront;

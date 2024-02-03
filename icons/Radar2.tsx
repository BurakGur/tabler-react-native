import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar2 = ({
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
    className="icon icon-tabler icon-tabler-radar-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="M15.51 15.56A5 5 0 1 0 12 17" />
    <path d="M18.832 17.86A9 9 0 1 0 12 21M12 12v9" />
  </svg>
);
export default SvgRadar2;

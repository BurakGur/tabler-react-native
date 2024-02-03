import * as React from "react";
import type { SVGProps } from "react";
const SvgTentOff = ({
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
    className="icon icon-tabler icon-tabler-tent-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m11 14 4 6h5m-2.863-6.868L12 4l-1.44 2.559M9.12 9.122 3 20h6l4-6M3 3l18 18" />
  </svg>
);
export default SvgTentOff;

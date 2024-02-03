import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseFilled = ({
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
    className="icon icon-tabler icon-tabler-mouse-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M14 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-2 4a1 1 0 0 0-1 1v4l.007.117A1 1 0 0 0 13 11V7l-.007-.117A1 1 0 0 0 12 6"
    />
  </svg>
);
export default SvgMouseFilled;

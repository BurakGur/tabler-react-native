import * as React from "react";
import type { SVGProps } from "react";
const SvgOvalVerticalFilled = ({
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
    className="icon icon-tabler icon-tabler-oval-vertical-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 5C6.543 5 2 8.028 2 12s4.543 7 10 7 10-3.028 10-7-4.543-7-10-7"
    />
  </svg>
);
export default SvgOvalVerticalFilled;

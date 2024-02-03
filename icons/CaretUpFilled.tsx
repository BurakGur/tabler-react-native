import * as React from "react";
import type { SVGProps } from "react";
const SvgCaretUpFilled = ({
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
    className="icon icon-tabler icon-tabler-caret-up-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M11.293 7.293a1 1 0 0 1 1.32-.083l.094.083 6 6 .083.094.054.077.054.096.017.036.027.067.032.108.01.053.01.06.004.057L19 14l-.002.059-.005.058-.009.06-.01.052-.032.108-.027.067-.07.132-.065.09-.073.081-.094.083-.077.054-.096.054-.036.017-.067.027-.108.032-.053.01-.06.01-.057.004L18 15H6c-.852 0-1.297-.986-.783-1.623l.076-.084z"
    />
  </svg>
);
export default SvgCaretUpFilled;

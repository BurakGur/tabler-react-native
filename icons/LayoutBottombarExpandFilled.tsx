import * as React from "react";
import type { SVGProps } from "react";
const SvgLayoutBottombarExpandFilled = ({
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
    className="icon icon-tabler icon-tabler-layout-bottombar-expand-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm0 2H6a1 1 0 0 0-.993.883L5 6v9h14V6a1 1 0 0 0-.883-.993zm-5.387 3.21.094.083 2 2a1 1 0 0 1-1.32 1.497l-.094-.083L12 10.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 2-2a1 1 0 0 1 1.32-.083"
    />
  </svg>
);
export default SvgLayoutBottombarExpandFilled;

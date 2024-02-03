import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoundedCheckFilled = ({
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
    className="icon icon-tabler icon-tabler-square-rounded-check-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2q-.327 0-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579q-.008.147-.013.299l-.017.616-.004.318L2 12q0 .327.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034q.147.008.299.013l.616.017L12 22l.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579q.008-.147.013-.299l.017-.616L22 12l-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034-.299-.013-.616-.017-.318-.004zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1 1.32-1.497l.094.083L11 12.585z"
    />
  </svg>
);
export default SvgSquareRoundedCheckFilled;

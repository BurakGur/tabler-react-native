import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBigRightLinesFilled = ({
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
    className="icon icon-tabler icon-tabler-arrow-big-right-lines-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12.089 3.634A2 2 0 0 0 11 5.414l-.001 2.585L9 8a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 9 16l1.999-.001.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434zM3 8a1 1 0 0 1 .993.883L4 9v6a1 1 0 0 1-1.993.117L2 15V9a1 1 0 0 1 1-1M6 8a1 1 0 0 1 .993.883L7 9v6a1 1 0 0 1-1.993.117L5 15V9a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgArrowBigRightLinesFilled;

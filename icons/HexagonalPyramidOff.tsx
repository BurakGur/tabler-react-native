import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonalPyramidOff = ({
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
    className="icon icon-tabler icon-tabler-hexagonal-pyramid-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7.877 7.88-4.56 7.53a1.99 1.99 0 0 0 .266 2.484l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l1.264-1.263m1.792-2.205a1.99 1.99 0 0 0-.262-1.538L12.838 2.457a.996.996 0 0 0-1.676 0L9.39 5.383M12 2l-1.254 4.742m-.841 3.177L7 20.9M12 2l2.153 8.14m1.444 5.457L17 20.9M3 3l18 18" />
  </svg>
);
export default SvgHexagonalPyramidOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgLemon2 = ({
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
    className="icon icon-tabler icon-tabler-lemon-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94.873 6.917-1.892 9.682s-6.743 3.442-9.682 1.892a2 2 0 1 1-2.796-2.796c-1.55-2.94-.873-6.917 1.892-9.682s6.743-3.442 9.682-1.892A2 2 0 0 1 18 4" />
  </svg>
);
export default SvgLemon2;

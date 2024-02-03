import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSquareRounded = ({
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
    className="icon icon-tabler icon-tabler-user-square-rounded"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    <path d="M6 20.05V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.05" />
  </svg>
);
export default SvgUserSquareRounded;

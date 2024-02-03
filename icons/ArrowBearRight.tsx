import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBearRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-bear-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3h5v5" />
    <path d="m17 3-7.536 7.536A5 5 0 0 0 8 14.07V21" />
  </svg>
);
export default SvgArrowBearRight;

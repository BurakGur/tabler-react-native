import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxMultiple6 = ({
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
    className="icon icon-tabler icon-tabler-box-multiple-6"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
    <path d="M12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M16 8a2 2 0 1 0-4 0v4" />
    <path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
  </svg>
);
export default SvgBoxMultiple6;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBible = ({
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
    className="icon icon-tabler icon-tabler-bible"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M19 16H7a2 2 0 0 0-2 2M12 7v6M10 9h4" />
  </svg>
);
export default SvgBible;

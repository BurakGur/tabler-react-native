import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCodesandbox = ({
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
    className="icon icon-tabler icon-tabler-brand-codesandbox"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 7.5v9l-4 2.25L12 21l-4-2.25-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25 4-2.25M12 12v9M12 12 8 9.75 4 7.5" />
    <path d="m20 12-4 2v4.75M4 12l4 2v4.75M8 5.25l4 2.25 4-2.25" />
  </svg>
);
export default SvgBrandCodesandbox;

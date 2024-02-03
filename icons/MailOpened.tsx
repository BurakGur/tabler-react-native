import * as React from "react";
import type { SVGProps } from "react";
const SvgMailOpened = ({
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
    className="icon icon-tabler icon-tabler-mail-opened"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 9 9 6 9-6-9-6z" />
    <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9M3 19l6-6M15 13l6 6" />
  </svg>
);
export default SvgMailOpened;

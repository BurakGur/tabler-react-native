import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeCancel = ({
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
    className="icon icon-tabler icon-tabler-home-cancel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.58 0 1.103.247 1.468.642" />
  </svg>
);
export default SvgHomeCancel;

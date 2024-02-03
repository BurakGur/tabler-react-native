import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeDot = ({
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
    className="icon icon-tabler icon-tabler-home-dot"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771" />
  </svg>
);
export default SvgHomeDot;

import * as React from "react";
import type { SVGProps } from "react";
const SvgBurger = ({
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
    className="icon icon-tabler icon-tabler-burger"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4M12 4c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4M5 12h14" />
  </svg>
);
export default SvgBurger;

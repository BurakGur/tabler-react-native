import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldDollar = ({
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
    className="icon icon-tabler icon-tabler-world-dollar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.876 10.51a9 9 0 1 0-7.839 10.43M3.6 9h16.8M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.578 9.02M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17M19 21v1m0-8v1" />
  </svg>
);
export default SvgWorldDollar;

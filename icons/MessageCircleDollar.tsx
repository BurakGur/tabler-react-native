import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircleDollar = ({
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
    className="icon icon-tabler icon-tabler-message-circle-dollar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13.16 19.914A9.94 9.94 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48 1.384 1.181 2.26 2.672 2.603 4.243M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17M19 21v1m0-8v1" />
  </svg>
);
export default SvgMessageCircleDollar;

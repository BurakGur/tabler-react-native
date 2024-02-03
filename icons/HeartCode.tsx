import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCode = ({
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
    className="icon icon-tabler icon-tabler-heart-code"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m19.5 12.572-.536.53m-7.91 5.96L4.5 12.573A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M20 21l2-2-2-2M17 17l-2 2 2 2" />
  </svg>
);
export default SvgHeartCode;

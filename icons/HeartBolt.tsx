import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartBolt = ({
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
    className="icon icon-tabler icon-tabler-heart-bolt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13 19-1 1-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.003 5.997M19 16l-2 3h4l-2 3" />
  </svg>
);
export default SvgHeartBolt;

import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartMinus = ({
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
    className="icon icon-tabler icon-tabler-heart-minus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m19.5 12.572-2.494 2.47M12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M16 19h6" />
  </svg>
);
export default SvgHeartMinus;

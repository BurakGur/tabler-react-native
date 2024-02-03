import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareRoundedMinus2 = ({
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
    className="icon icon-tabler icon-tabler-square-rounded-minus-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.5 21c-.18.002-.314 0-.5 0-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9c0 1.136-.046 2.138-.152 3.02M16 19h6" />
  </svg>
);
export default SvgSquareRoundedMinus2;

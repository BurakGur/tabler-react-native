import * as React from "react";
import type { SVGProps } from "react";
const SvgInnerShadowBottomLeftFilled = ({
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
    className="icon icon-tabler icon-tabler-inner-shadow-bottom-left-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-6 9a1 1 0 0 0-1 1 7 7 0 0 0 7 7 1 1 0 0 0 0-2 5 5 0 0 1-5-5 1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgInnerShadowBottomLeftFilled;

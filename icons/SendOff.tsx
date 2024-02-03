import * as React from "react";
import type { SVGProps } from "react";
const SvgSendOff = ({
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
    className="icon icon-tabler icon-tabler-send-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10 14 2-2m2-2 7-7M10.718 6.713 21 3l-3.715 10.289m-1.063 2.941L14.5 21a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1l4.772-1.723M3 3l18 18" />
  </svg>
);
export default SvgSendOff;

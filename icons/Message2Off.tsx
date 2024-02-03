import * as React from "react";
import type { SVGProps } from "react";
const SvgMessage2Off = ({
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
    className="icon icon-tabler icon-tabler-message-2-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 9h1m4 0h3M8 13h5M8 4h10a3 3 0 0 1 3 3v8c0 .57-.16 1.104-.436 1.558M18 18h-3l-3 3-3-3H6a3 3 0 0 1-3-3V7c0-1.084.575-2.034 1.437-2.561M3 3l18 18" />
  </svg>
);
export default SvgMessage2Off;

import * as React from "react";
import type { SVGProps } from "react";
const SvgCandleFilled = ({
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
    className="icon icon-tabler icon-tabler-candle-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M14 10h-4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2M11.254 2.334l-1.55 1.737C8.662 5.348 8.806 7.168 10 8.237a3 3 0 0 0 4.196-4.28l-1.452-1.624a1 1 0 0 0-1.491.001z"
    />
  </svg>
);
export default SvgCandleFilled;

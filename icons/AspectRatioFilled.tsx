import * as React from "react";
import type { SVGProps } from "react";
const SvgAspectRatioFilled = ({
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
    className="icon icon-tabler icon-tabler-aspect-ratio-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M9 7a1 1 0 0 1 .117 1.993L9 9H7v2a1 1 0 0 1-.883.993L6 12a1 1 0 0 1-.993-.883L5 11V8a1 1 0 0 1 .883-.993L6 7zm9 5a1 1 0 0 1 .993.883L19 13v3a1 1 0 0 1-.883.993L18 17h-3a1 1 0 0 1-.117-1.993L15 15h2v-2a1 1 0 0 1 .883-.993z"
    />
  </svg>
);
export default SvgAspectRatioFilled;

import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareF6Filled = ({
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
    className="icon icon-tabler icon-tabler-square-f6-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM15.25 8H14l-.15.005a2 2 0 0 0-1.844 1.838L12 10v4l.005.15a2 2 0 0 0 1.838 1.844L14 16h1l.15-.005a2 2 0 0 0 1.844-1.838L17 14v-1l-.005-.15a2 2 0 0 0-1.838-1.844L15 11h-1v-1h1.032l.026.087A1 1 0 0 0 17 9.75a1.75 1.75 0 0 0-1.606-1.744zM10 8H8l-.117.007a1 1 0 0 0-.876.876L7 9v6l.007.117a1 1 0 0 0 .876.876L8 16l.117-.007a1 1 0 0 0 .876-.876L9 15v-2h1l.117-.007a1 1 0 0 0 0-1.986L10 11H9v-1h1l.117-.007a1 1 0 0 0 0-1.986zm5 5v1h-1v-1z"
    />
  </svg>
);
export default SvgSquareF6Filled;

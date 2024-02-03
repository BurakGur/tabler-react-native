import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignBoxLeftTopFilled = ({
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
    className="icon icon-tabler icon-tabler-align-box-left-top-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM8 11H6l-.117.007A1 1 0 0 0 6 13h2l.117-.007A1 1 0 0 0 8 11m4-3H6l-.117.007A1 1 0 0 0 6 10h6l.117-.007A1 1 0 0 0 12 8m-2-3H6l-.117.007A1 1 0 0 0 6 7h4l.117-.007A1 1 0 0 0 10 5"
    />
  </svg>
);
export default SvgAlignBoxLeftTopFilled;

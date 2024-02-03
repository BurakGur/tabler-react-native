import * as React from "react";
import type { SVGProps } from "react";
const SvgBallFootballOff = ({
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
    className="icon icon-tabler icon-tabler-ball-football-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.041 16.046A9 9 0 0 0 7.957 3.956M5.634 5.639a9 9 0 0 0 12.726 12.73" />
    <path d="m12 7 4.755 3.455-.566 1.743-.98 3.014L15 16H9l-1.755-5.545 1.86-1.351 2.313-1.681zM12 7V3M15 16l2.5 3M16.755 10.455 20.5 9M9.061 16.045 6.5 19M7.245 10.455 3.5 9M3 3l18 18" />
  </svg>
);
export default SvgBallFootballOff;

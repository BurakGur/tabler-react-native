import * as React from "react";
import type { SVGProps } from "react";
const SvgClockHeart = ({
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
    className="icon icon-tabler icon-tabler-clock-heart"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20.956 11.107a9 9 0 1 0-9.579 9.871" />
    <path d="m18 22 3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071zM12 7v5l.5.5" />
  </svg>
);
export default SvgClockHeart;

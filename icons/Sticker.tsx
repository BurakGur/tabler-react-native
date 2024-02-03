import * as React from "react";
import type { SVGProps } from "react";
const SvgSticker = ({
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
    className="icon icon-tabler icon-tabler-sticker"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m20 12-2 .5A6 6 0 0 1 11.5 6l.5-2z" />
    <path d="M20 12a8 8 0 1 1-8-8" />
  </svg>
);
export default SvgSticker;

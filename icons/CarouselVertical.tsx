import * as React from "react";
import type { SVGProps } from "react";
const SvgCarouselVertical = ({
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
    className="icon icon-tabler icon-tabler-carousel-vertical"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 8v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M7 22v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1M17 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V2" />
  </svg>
);
export default SvgCarouselVertical;

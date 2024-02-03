import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPinQuestion = ({
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
    className="icon icon-tabler icon-tabler-map-pin-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <path d="M14.997 19.317 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243A8 8 0 1 1 20 11.073M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgMapPinQuestion;

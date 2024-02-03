import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPins = ({
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
    className="icon icon-tabler icon-tabler-map-pins"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657zM8 7v.01M18.828 17.828a4 4 0 1 0-5.656 0L16 20.657zM16 15v.01" />
  </svg>
);
export default SvgMapPins;

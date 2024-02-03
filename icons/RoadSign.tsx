import * as React from "react";
import type { SVGProps } from "react";
const SvgRoadSign = ({
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
    className="icon icon-tabler icon-tabler-road-sign"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0z" />
    <path d="M9 14v-2c0-.59.414-1 1-1h5" />
    <path d="m13 9 2 2-2 2" />
  </svg>
);
export default SvgRoadSign;

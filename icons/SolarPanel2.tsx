import * as React from "react";
import type { SVGProps } from "react";
const SvgSolarPanel2 = ({
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
    className="icon icon-tabler icon-tabler-solar-panel-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 2a4 4 0 1 0 8 0M4 3h1M19 3h1M12 9v1M17.2 7.2l.707.707M6.8 7.2l-.7.7M4.28 21h15.44a1 1 0 0 0 .97-1.243l-1.5-6a1 1 0 0 0-.97-.757H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 21M4 17h16M10 13l-1 8M14 13l1 8" />
  </svg>
);
export default SvgSolarPanel2;

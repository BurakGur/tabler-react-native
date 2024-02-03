import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandThreejs = ({
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
    className="icon icon-tabler icon-tabler-brand-threejs"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 22 3 3l19 5.5z" />
    <path d="m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64" />
    <path d="M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z" />
  </svg>
);
export default SvgBrandThreejs;

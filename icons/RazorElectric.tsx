import * as React from "react";
import type { SVGProps } from "react";
const SvgRazorElectric = ({
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
    className="icon icon-tabler icon-tabler-razor-electric"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 3v2M12 3v2M16 3v2M9 12v6a3 3 0 0 0 6 0v-6zM8 5h8l-1 4H9zM12 17v1" />
  </svg>
);
export default SvgRazorElectric;

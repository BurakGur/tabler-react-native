import * as React from "react";
import type { SVGProps } from "react";
const SvgSolarPanel = ({
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
    className="icon icon-tabler icon-tabler-solar-panel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.28 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6A1 1 0 0 0 18.22 6H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 14M4 10h16M10 6l-1 8M14 6l1 8M12 14v4M7 18h10" />
  </svg>
);
export default SvgSolarPanel;

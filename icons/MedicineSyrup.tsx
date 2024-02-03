import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicineSyrup = ({
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
    className="icon icon-tabler icon-tabler-medicine-syrup"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 21h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1M10 14h4M12 12v4M10 7V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
  </svg>
);
export default SvgMedicineSyrup;

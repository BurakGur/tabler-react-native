import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrentLocationOff = ({
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
    className="icon icon-tabler icon-tabler-current-location-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.685 10.661c-.3-.6-.795-1.086-1.402-1.374m-3.397.584a3 3 0 1 0 4.24 4.245" />
    <path d="M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642-2.378A8 8 0 0 0 8.703 4.709M12 2v2M12 20v2M20 12h2M2 12h2M3 3l18 18" />
  </svg>
);
export default SvgCurrentLocationOff;

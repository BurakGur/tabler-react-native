import * as React from "react";
import type { SVGProps } from "react";
const SvgParkingOff = ({
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
    className="icon icon-tabler icon-tabler-parking-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.582 3.41A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.056.59-1.418" />
    <path d="M9 16V9m3-1h1a2 2 0 0 1 1.817 2.836M12 12H9M3 3l18 18" />
  </svg>
);
export default SvgParkingOff;

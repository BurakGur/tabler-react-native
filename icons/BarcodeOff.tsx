import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcodeOff = ({
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
    className="icon icon-tabler icon-tabler-barcode-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 7V6c0-.552.224-1.052.586-1.414M4 17v1a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v1M16 20h2c.551 0 1.05-.223 1.412-.584M5 11h1v2H5zM10 11v2M15 11v.01M19 11v2M3 3l18 18" />
  </svg>
);
export default SvgBarcodeOff;

import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertTriangleOff = ({
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
    className="icon icon-tabler icon-tabler-alert-triangle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21.998 17.997a1.9 1.9 0 0 0-.255-.872L13.637 3.591a1.914 1.914 0 0 0-3.274 0l-1.04 1.736M7.83 7.82l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871H20M12 16h.01M3 3l18 18M12 7v1" />
  </svg>
);
export default SvgAlertTriangleOff;

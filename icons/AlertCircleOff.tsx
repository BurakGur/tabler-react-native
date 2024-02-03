import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertCircleOff = ({
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
    className="icon icon-tabler icon-tabler-alert-circle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5.644 5.629A9 9 0 1 0 18.359 18.37m1.693-2.349A9 9 0 0 0 7.965 3.953M12 7v1M12 16h.01M3 3l18 18" />
  </svg>
);
export default SvgAlertCircleOff;

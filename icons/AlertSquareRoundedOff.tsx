import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertSquareRoundedOff = ({
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
    className="icon icon-tabler icon-tabler-alert-square-rounded-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.201 19.199C17.851 20.549 15.601 21 12 21c-7.2 0-9-1.8-9-9 0-3.598.45-5.847 1.797-7.197m2.626-1.376C8.627 3.12 10.132 3 12 3c7.2 0 9 1.8 9 9 0 1.865-.12 3.367-.425 4.57M12 7v1M12 16h.01M3 3l18 18" />
  </svg>
);
export default SvgAlertSquareRoundedOff;

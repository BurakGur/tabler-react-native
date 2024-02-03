import * as React from "react";
import type { SVGProps } from "react";
const SvgBroadcastOff = ({
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
    className="icon icon-tabler icon-tabler-broadcast-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18.364 19.364A9 9 0 0 0 8.643 4.647M6.155 6.156a9 9 0 0 0-.519 13.208" />
    <path d="M15.536 16.536A5 5 0 0 0 12 8M9 9a5 5 0 0 0-.535 7.536M12 12a1 1 0 1 0 1 1M3 3l18 18" />
  </svg>
);
export default SvgBroadcastOff;

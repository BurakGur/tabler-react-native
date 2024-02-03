import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeInfinity = ({
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
    className="icon icon-tabler icon-tabler-home-infinity"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 14v-2h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.75 1.032M15.536 17.586a2.123 2.123 0 0 0-2.929 0 1.95 1.95 0 0 0 0 2.828c.809.781 2.12.781 2.929 0s-.805.778 0 0l1.46-1.41 1.46-1.419" />
    <path d="m15.54 17.582 1.46 1.42 1.46 1.41c.809.78-.805-.779 0 0s2.12.781 2.929 0a1.95 1.95 0 0 0 0-2.828 2.123 2.123 0 0 0-2.929 0" />
  </svg>
);
export default SvgHomeInfinity;

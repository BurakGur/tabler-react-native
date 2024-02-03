import * as React from "react";
import type { SVGProps } from "react";
const SvgEarScan = ({
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
    className="icon icon-tabler icon-tabler-ear-scan"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 15a2 2 0 0 1-2 2c-.732 0-1.555-.247-1.72-.98-.634-2.8-3.17-2.628-3.28-5.02v-.5a3.5 3.5 0 0 1 6.671-1.483M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2M13 12v.01" />
  </svg>
);
export default SvgEarScan;

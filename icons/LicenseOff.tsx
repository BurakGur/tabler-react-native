import * as React from "react";
import type { SVGProps } from "react";
const SvgLicenseOff = ({
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
    className="icon icon-tabler icon-tabler-license-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 1 0 4 0v-2m0-4V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-.864.126M5.122 5.151A3 3 0 0 0 5 6v11M11 7h2M9 11h2M3 3l18 18" />
  </svg>
);
export default SvgLicenseOff;
